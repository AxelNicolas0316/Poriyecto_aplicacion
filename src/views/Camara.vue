<template>
  <ion-page>
    <ion-content class="camera-page">
      <div class="camera-container">
        <!-- Header -->
        <div class="camera-header">
          <h1>
            <ion-icon name="camera-outline"></ion-icon>
            Cámara
          </h1>
          <p>Captura fotos para tus tareas y apuntes</p>
        </div>

        <!-- Vista de la cámara -->
        <div class="camera-view-container">
          <video 
            ref="videoElement" 
            autoplay 
            playsinline
            class="camera-video"
          ></video>
          
          <canvas ref="canvasElement" class="camera-canvas"></canvas>
          
          <!-- Overlay de guía -->
          <div class="camera-overlay">
            <div class="overlay-corner top-left"></div>
            <div class="overlay-corner top-right"></div>
            <div class="overlay-corner bottom-left"></div>
            <div class="overlay-corner bottom-right"></div>
          </div>

          <!-- Mensaje si no hay cámara -->
          <div v-if="!cameraAvailable" class="no-camera">
            <ion-icon name="videocam-off-outline"></ion-icon>
            <p>No se pudo acceder a la cámara</p>
            <small>Verifica los permisos del navegador</small>
          </div>
        </div>

        <!-- Controles -->
        <div class="camera-controls">
          <ion-button class="control-btn" @click="openGallery">
            <div class="control-icon gallery">
              <ion-icon name="images-outline"></ion-icon>
            </div>
            <span>Galería</span>
          </ion-button>

          <ion-button class="capture-btn" @click="takePhoto" :disabled="!cameraAvailable">
            <div class="capture-ring"></div>
            <div class="capture-inner"></div>
          </ion-button>

          <ion-button class="control-btn" @click="toggleFlash">
            <div class="control-icon" :class="{ active: flashOn }">
              <ion-icon :name="flashOn ? 'flash' : 'flash-outline'"></ion-icon>
            </div>
            <span>Flash</span>
          </ion-button>
        </div>

        <!-- Switch de cámara -->
        <div class="camera-switch" @click="switchCamera">
          <ion-icon name="camera-reverse-outline"></ion-icon>
          <span>Cambiar cámara</span>
        </div>

        <!-- Fotos recientes -->
        <div class="recent-photos" v-if="recentPhotos.length > 0">
          <div class="photos-header">
            <h3>
              <ion-icon name="images-outline"></ion-icon>
              Fotos Recientes
            </h3>
            <ion-button fill="clear" @click="clearPhotos">
              <ion-icon name="trash-outline"></ion-icon>
            </ion-button>
          </div>
          
          <div class="photos-grid">
            <div 
              v-for="(photo, index) in recentPhotos" 
              :key="index"
              class="photo-item"
              @click="viewPhoto(photo)"
            >
              <img :src="photo" alt="Foto reciente" />
            </div>
          </div>
        </div>

        <!-- Estadísticas -->
        <div class="camera-stats">
          <div class="stat-card">
            <ion-icon name="document-text-outline"></ion-icon>
            <div>
              <strong>{{ todayScans }}</strong>
              <small>Escaneos hoy</small>
            </div>
          </div>
          <div class="stat-card">
            <ion-icon name="images-outline"></ion-icon>
            <div>
              <strong>{{ totalPhotos }}</strong>
              <small>Total fotos</small>
            </div>
          </div>
          <div class="stat-card">
            <ion-icon name="cloud-upload-outline"></ion-icon>
            <div>
              <strong>{{ uploadedCount }}</strong>
              <small>Subidas</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Input oculto para galería -->
      <input 
        type="file" 
        ref="fileInput" 
        accept="image/*" 
        @change="handleFileSelect"
        style="display: none"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon, IonButton } from '@ionic/vue';
import { ref, onMounted, onUnmounted } from 'vue';

const videoElement = ref<HTMLVideoElement | null>(null);
const canvasElement = ref<HTMLCanvasElement | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

const cameraAvailable = ref(true);
const flashOn = ref(false);
const currentStream = ref<MediaStream | null>(null);
const facingMode = ref<'user' | 'environment'>('environment');

const recentPhotos = ref<string[]>([]);
const todayScans = ref(3);
const totalPhotos = ref(12);
const uploadedCount = ref(8);

// Inicializar cámara
onMounted(async () => {
  await startCamera();
  loadRecentPhotos();
});

onUnmounted(() => {
  stopCamera();
});

async function startCamera() {
  try {
    // Detener cámara anterior si existe
    stopCamera();

    const constraints = {
      video: {
        facingMode: facingMode.value,
        width: { ideal: 1920 },
        height: { ideal: 1080 }
      }
    };

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    
    if (videoElement.value) {
      videoElement.value.srcObject = stream;
      currentStream.value = stream;
      cameraAvailable.value = true;
    }
  } catch (error) {
    console.error('Error al acceder a la cámara:', error);
    cameraAvailable.value = false;
  }
}

function stopCamera() {
  if (currentStream.value) {
    currentStream.value.getTracks().forEach(track => track.stop());
    currentStream.value = null;
  }
}

function takePhoto() {
  if (!videoElement.value || !canvasElement.value || !cameraAvailable.value) return;

  const video = videoElement.value;
  const canvas = canvasElement.value;
  const context = canvas.getContext('2d');

  if (!context) return;

  // Configurar canvas al tamaño del video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Dibujar el frame actual del video
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convertir a imagen
  const imageData = canvas.toDataURL('image/png');
  
  // Guardar en recientes
  recentPhotos.value.unshift(imageData);
  if (recentPhotos.value.length > 6) {
    recentPhotos.value.pop();
  }

  // Guardar en localStorage
  savePhotos();

  // Incrementar contador
  todayScans.value++;
  totalPhotos.value++;

  // Efecto de flash
  if (flashOn.value) {
    canvas.classList.add('flash-effect');
    setTimeout(() => canvas.classList.remove('flash-effect'), 100);
  }

  // Mostrar confirmación
  showCaptureFeedback();
}

function showCaptureFeedback() {
  // Crear elemento de feedback visual
  const feedback = document.createElement('div');
  feedback.className = 'capture-feedback';
  feedback.innerHTML = '✓ Foto capturada';
  document.querySelector('.camera-view-container')?.appendChild(feedback);
  
  setTimeout(() => feedback.remove(), 1500);
}

function switchCamera() {
  facingMode.value = facingMode.value === 'user' ? 'environment' : 'user';
  startCamera();
}

function toggleFlash() {
  flashOn.value = !flashOn.value;
}

function openGallery() {
  fileInput.value?.click();
}

function handleFileSelect(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      recentPhotos.value.unshift(result);
      if (recentPhotos.value.length > 6) {
        recentPhotos.value.pop();
      }
      savePhotos();
      totalPhotos.value++;
    };
    reader.readAsDataURL(file);
  }
  
  // Resetear input
  target.value = '';
}

function viewPhoto(photo: string) {
  // Crear modal para ver la foto
  const modal = document.createElement('div');
  modal.className = 'photo-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <img src="${photo}" alt="Foto completa" />
      <button class="modal-close">✕</button>
    </div>
  `;
  
  modal.onclick = (e) => {
    if (e.target === modal || (e.target as HTMLElement).classList.contains('modal-close')) {
      modal.remove();
    }
  };
  
  document.body.appendChild(modal);
}

function clearPhotos() {
  recentPhotos.value = [];
  localStorage.removeItem('camera-photos');
}

function savePhotos() {
  localStorage.setItem('camera-photos', JSON.stringify(recentPhotos.value));
}

function loadRecentPhotos() {
  const saved = localStorage.getItem('camera-photos');
  if (saved) {
    recentPhotos.value = JSON.parse(saved);
  }
}
</script>

<style scoped>
.camera-page {
  --background: #f9fafb;
}

.camera-container {
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Header */
.camera-header {
  text-align: center;
  padding: 10px 0;
}

.camera-header h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 8px;
}

.camera-header h1 ion-icon {
  -webkit-text-fill-color: #4f46e5;
}

.camera-header p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* Camera View */
.camera-view-container {
  position: relative;
  background: #000;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 9/16;
  max-height: 500px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.camera-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.camera-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.camera-canvas.flash-effect {
  animation: flash 0.1s ease-out;
}

@keyframes flash {
  0% { background: rgba(255, 255, 255, 0.8); }
  100% { background: transparent; }
}

.camera-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  pointer-events: none;
}

.overlay-corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.6);
}

.overlay-corner.top-left {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.overlay-corner.top-right {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

.overlay-corner.bottom-left {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}

.overlay-corner.bottom-right {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}

.no-camera {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
}

.no-camera ion-icon {
  font-size: 48px;
  color: rgba(255, 255, 255, 0.5);
}

.no-camera p {
  font-size: 16px;
  margin: 0;
}

.no-camera small {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

/* Controls */
.camera-controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
}

.control-btn {
  --background: transparent;
  --background-hover: transparent;
  --background-activated: transparent;
  --box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 70px;
}

.control-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.control-icon ion-icon {
  font-size: 24px;
  color: #4f46e5;
}

.control-icon.active {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
}

.control-icon.active ion-icon {
  color: #ffffff;
}

.control-btn span {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
}

.capture-btn {
  --background: transparent;
  --background-hover: transparent;
  --background-activated: transparent;
  --box-shadow: none;
  --padding-start: 0;
  --padding-end: 0;
  min-width: auto;
}

.capture-ring {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  background: transparent;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.capture-inner {
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
}

.capture-btn:active .capture-inner {
  transform: translate(-50%, -50%) scale(0.9);
}

.capture-btn:disabled {
  opacity: 0.5;
}

/* Camera Switch */
.camera-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.camera-switch ion-icon {
  font-size: 20px;
  color: #4f46e5;
}

.camera-switch span {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

/* Recent Photos */
.recent-photos {
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.photos-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.photos-header h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.photos-header h3 ion-icon {
  font-size: 20px;
  color: #4f46e5;
}

.photos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.photo-item {
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Stats */
.camera-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.stat-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.stat-card ion-icon {
  font-size: 28px;
  color: #4f46e5;
  width: 44px;
  height: 44px;
  background: rgba(79, 70, 229, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-card strong {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
}

.stat-card small {
  font-size: 11px;
  color: #6b7280;
}

/* Photo Modal */
.photo-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 12px;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
}

/* Capture Feedback */
.capture-feedback {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(16, 185, 129, 0.9);
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  animation: fadeInOut 1.5s ease-out;
  z-index: 100;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
  20% { opacity: 1; transform: translateX(-50%) translateY(0); }
  80% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .camera-page {
    --background: #0f0f1a;
  }

  .recent-photos,
  .stat-card {
    background: #1e1e2e;
  }

  .photos-header h3,
  .stat-card strong {
    color: #f9fafb;
  }

  .photos-header h3 small,
  .stat-card small {
    color: rgba(255, 255, 255, 0.6);
  }

  .camera-switch {
    background: rgba(255, 255, 255, 0.1);
  }

  .camera-switch span {
    color: #f9fafb;
  }
}
</style>
