<template>
  <ion-page>
    <ion-content class="dashboard-content" :scroll-y="true">
      <div class="dashboard">
        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-content">
            <div class="welcome-badge">
              <ion-icon name="hand-left-outline"></ion-icon>
              <span>¡Bienvenido de nuevo!</span>
            </div>
            <h1 class="hero-title">
              Hola, <span class="gradient-text">{{ userName }}</span>
            </h1>
            <p class="hero-subtitle">Continúa tu aprendizaje donde lo dejaste</p>
            
            <div class="hero-stats">
              <div class="hero-stat-card">
                <div class="stat-icon-wrapper primary">
                  <ion-icon name="book-outline"></ion-icon>
                </div>
                <div class="stat-info">
                  <span class="stat-number">12</span>
                  <span class="stat-label">Lecciones</span>
                </div>
              </div>
              <div class="hero-stat-card">
                <div class="stat-icon-wrapper success">
                  <ion-icon name="flame-outline"></ion-icon>
                </div>
                <div class="stat-info">
                  <span class="stat-number">5</span>
                  <span class="stat-label">Días racha</span>
                </div>
              </div>
              <div class="hero-stat-card">
                <div class="stat-icon-wrapper warning">
                  <ion-icon name="star-outline"></ion-icon>
                </div>
                <div class="stat-info">
                  <span class="stat-number">850</span>
                  <span class="stat-label">Puntos</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Elementos decorativos flotantes -->
          <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
          </div>
        </div>

        <!-- Progreso Section -->
        <div class="section">
          <div class="section-header">
            <div class="section-title-wrapper">
              <ion-icon name="analytics-outline"></ion-icon>
              <h2 class="section-title">Tu Progreso</h2>
            </div>
          </div>

          <div class="progress-card">
            <div class="progress-header">
              <div class="progress-icon-box">
                <ion-icon name="trophy-outline"></ion-icon>
              </div>
              <div class="progress-texts">
                <h3>Progreso General</h3>
                <p>12 de 20 lecciones completadas</p>
              </div>
              <div class="progress-percentage">60%</div>
            </div>
            
            <div class="progress-bar-wrapper">
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: 60%"></div>
              </div>
            </div>

            <div class="progress-stats">
              <div class="progress-stat">
                <ion-icon name="checkmark-circle" class="stat-icon-check"></ion-icon>
                <div>
                  <strong>12</strong>
                  <small>Completadas</small>
                </div>
              </div>
              <div class="progress-stat">
                <ion-icon name="time-outline" class="stat-icon-time"></ion-icon>
                <div>
                  <strong>3</strong>
                  <small>En progreso</small>
                </div>
              </div>
              <div class="progress-stat">
                <ion-icon name="lock-closed-outline" class="stat-icon-lock"></ion-icon>
                <div>
                  <strong>5</strong>
                  <small>Pendientes</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Continuar Aprendiendo -->
        <div class="section">
          <div class="section-header">
            <div class="section-title-wrapper">
              <ion-icon name="play-circle-outline"></ion-icon>
              <h2 class="section-title">Continuar Aprendiendo</h2>
            </div>
          </div>

          <div class="continue-card" @click="goToSeccion('fundamentos')">
            <div class="continue-thumbnail">
              <div class="thumbnail-bg">
                <ion-icon name="code-slash-outline"></ion-icon>
              </div>
              <div class="play-button">
                <ion-icon name="play"></ion-icon>
              </div>
            </div>
            <div class="continue-info">
              <div class="continue-badge">En progreso</div>
              <h3 class="continue-title">Fundamentos de Programación</h3>
              <p class="continue-description">Lección 5: Variables y Tipos de Datos</p>
              <div class="continue-progress">
                <div class="continue-progress-bar">
                  <div class="continue-progress-fill" style="width: 45%"></div>
                </div>
                <span class="continue-progress-text">45%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenido Destacado -->
        <div class="section">
          <div class="section-header">
            <div class="section-title-wrapper">
              <ion-icon name="sparkles-outline"></ion-icon>
              <h2 class="section-title">Contenido Destacado</h2>
            </div>
          </div>

          <div class="featured-grid">
            <!-- Card 1 -->
            <div class="featured-card" @click="goToSeccion('programacion-web')">
              <div class="featured-image">
                <div class="featured-bg programming"></div>
                <div class="featured-overlay">
                  <ion-icon name="code-slash-outline" class="featured-icon"></ion-icon>
                  <div class="featured-pattern"></div>
                </div>
                <div class="featured-badge">Nuevo</div>
              </div>
              <div class="featured-content">
                <h3 class="featured-title">Programación Web</h3>
                <p class="featured-description">HTML, CSS y JavaScript desde cero</p>
                <div class="featured-meta">
                  <div class="meta-item">
                    <ion-icon name="time-outline"></ion-icon>
                    <span>4h 30m</span>
                  </div>
                  <div class="meta-item">
                    <ion-icon name="document-text-outline"></ion-icon>
                    <span>12 lecciones</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="featured-card" @click="goToSeccion('apps-moviles')">
              <div class="featured-image">
                <div class="featured-bg mobile"></div>
                <div class="featured-overlay">
                  <ion-icon name="phone-portrait-outline" class="featured-icon"></ion-icon>
                  <div class="featured-pattern"></div>
                </div>
              </div>
              <div class="featured-content">
                <h3 class="featured-title">Apps Móviles</h3>
                <p class="featured-description">Desarrollo con Ionic y Vue</p>
                <div class="featured-meta">
                  <div class="meta-item">
                    <ion-icon name="time-outline"></ion-icon>
                    <span>6h 15m</span>
                  </div>
                  <div class="meta-item">
                    <ion-icon name="document-text-outline"></ion-icon>
                    <span>18 lecciones</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="featured-card" @click="goToSeccion('bases-datos')">
              <div class="featured-image">
                <div class="featured-bg database"></div>
                <div class="featured-overlay">
                  <ion-icon name="server-outline" class="featured-icon"></ion-icon>
                  <div class="featured-pattern"></div>
                </div>
                <div class="featured-badge popular">Popular</div>
              </div>
              <div class="featured-content">
                <h3 class="featured-title">Bases de Datos</h3>
                <p class="featured-description">SQL y NoSQL esenciales</p>
                <div class="featured-meta">
                  <div class="meta-item">
                    <ion-icon name="time-outline"></ion-icon>
                    <span>5h 45m</span>
                  </div>
                  <div class="meta-item">
                    <ion-icon name="document-text-outline"></ion-icon>
                    <span>15 lecciones</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="featured-card" @click="goToSeccion('diseno-uiux')">
              <div class="featured-image">
                <div class="featured-bg design"></div>
                <div class="featured-overlay">
                  <ion-icon name="color-palette-outline" class="featured-icon"></ion-icon>
                  <div class="featured-pattern"></div>
                </div>
              </div>
              <div class="featured-content">
                <h3 class="featured-title">Diseño UI/UX</h3>
                <p class="featured-description">Interfaces atractivas</p>
                <div class="featured-meta">
                  <div class="meta-item">
                    <ion-icon name="time-outline"></ion-icon>
                    <span>3h 20m</span>
                  </div>
                  <div class="meta-item">
                    <ion-icon name="document-text-outline"></ion-icon>
                    <span>10 lecciones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accesos Rápidos -->
        <div class="section">
          <div class="section-header">
            <div class="section-title-wrapper">
              <ion-icon name="flash-outline"></ion-icon>
              <h2 class="section-title">Accesos Rápidos</h2>
            </div>
          </div>

          <div class="quick-access-grid">
            <div class="quick-access-card" @click="goToCamara">
              <div class="quick-icon camera">
                <ion-icon name="camera-outline"></ion-icon>
              </div>
              <span>Cámara</span>
            </div>
            <div class="quick-access-card">
              <div class="quick-icon notes">
                <ion-icon name="document-text-outline"></ion-icon>
              </div>
              <span>Notas</span>
            </div>
            <div class="quick-access-card">
              <div class="quick-icon calendar">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <span>Horario</span>
            </div>
            <div class="quick-access-card">
              <div class="quick-icon settings">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span>Ajustes</span>
            </div>
          </div>
        </div>

        <!-- Espacio final -->
        <div style="height: 60px;"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const router = useRouter();
const userStore = useUserStore();

const userName = computed(() => {
  return userStore.user?.usuario || 'Estudiante';
});

function goToSeccion(nombre: string) {
  console.log('Navegando a sección:', nombre);
  router.push(`/seccion/${nombre}`);
}

function goToCamara() {
  console.log('Navegando a cámara');
  router.push('/camara');
}
</script>

<style scoped>
/* Dashboard Content */
.dashboard-content {
  --background: #f9fafb;
}

.dashboard {
  width: 100%;
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 50%, #06b6d4 100%);
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
  padding: 40px 24px 48px;
  overflow: hidden;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-content {
  position: relative;
  z-index: 2;
}

.welcome-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.welcome-badge ion-icon {
  font-size: 18px;
  color: #ffffff;
}

.welcome-badge span {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.hero-title {
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 8px;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 24px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.hero-stat-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon-wrapper.primary {
  background: rgba(79, 70, 229, 0.3);
}

.stat-icon-wrapper.success {
  background: rgba(16, 185, 129, 0.3);
}

.stat-icon-wrapper.warning {
  background: rgba(245, 158, 11, 0.3);
}

.stat-icon-wrapper ion-icon {
  font-size: 24px;
  color: #ffffff;
}

.stat-number {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
}

.stat-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
}

/* Floating Shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 120px;
  height: 120px;
  top: 20px;
  right: 20px;
  animation-delay: 0s;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 100px;
  right: 100px;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  top: 60px;
  right: 180px;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Sections */
.section {
  padding: 24px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.section-title-wrapper ion-icon {
  font-size: 20px;
  color: #4f46e5;
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

/* Progress Card */
.progress-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.progress-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.progress-icon-box {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-icon-box ion-icon {
  font-size: 28px;
  color: #ffffff;
}

.progress-texts {
  flex: 1;
}

.progress-texts h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px;
}

.progress-texts p {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.progress-percentage {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.progress-bar-bg {
  height: 12px;
  background: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 20px;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #4f46e5 0%, #8b5cf6 100%);
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(79, 70, 229, 0.4);
}

.progress-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}

.progress-stat {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-icon-check {
  font-size: 20px;
  color: #10b981;
}

.stat-icon-time {
  font-size: 20px;
  color: #f59e0b;
}

.stat-icon-lock {
  font-size: 20px;
  color: #6b7280;
}

.progress-stat strong {
  display: block;
  font-size: 16px;
  color: #1f2937;
}

.progress-stat small {
  font-size: 11px;
  color: #6b7280;
}

/* Continue Card */
.continue-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  gap: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
}

.continue-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.continue-thumbnail {
  width: 110px;
  height: 85px;
  border-radius: 14px;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
}

.thumbnail-bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbnail-bg ion-icon {
  font-size: 40px;
  color: rgba(255, 255, 255, 0.4);
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.play-button ion-icon {
  font-size: 18px;
  color: #4f46e5;
  margin-left: 4px;
}

.continue-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.continue-badge {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  width: fit-content;
}

.continue-title {
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px;
}

.continue-description {
  font-size: 13px;
  color: #6b7280;
  margin: 0 0 12px;
}

.continue-progress {
  display: flex;
  align-items: center;
  gap: 12px;
}

.continue-progress-bar {
  flex: 1;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}

.continue-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4f46e5 0%, #8b5cf6 100%);
  border-radius: 3px;
}

.continue-progress-text {
  font-size: 12px;
  font-weight: 600;
  color: #4f46e5;
}

/* Featured Grid */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.featured-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.featured-image {
  height: 140px;
  position: relative;
  overflow: hidden;
}

.featured-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.featured-bg.programming {
  background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 50%, #06b6d4 100%);
}

.featured-bg.mobile {
  background: linear-gradient(135deg, #06b6d4 0%, #4f46e5 50%, #8b5cf6 100%);
}

.featured-bg.database {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #f59e0b 100%);
}

.featured-bg.design {
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #4f46e5 100%);
}

.featured-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured-icon {
  font-size: 64px;
  color: rgba(255, 255, 255, 0.6);
}

.featured-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 2px, transparent 2px),
    radial-gradient(circle at 60px 60px, rgba(255,255,255,0.1) 2px, transparent 2px);
  background-size: 80px 80px;
}

.featured-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  color: #4f46e5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.featured-badge.popular {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  color: #ffffff;
}

.featured-content {
  padding: 16px;
}

.featured-title {
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 8px;
}

.featured-description {
  font-size: 13px;
  color: #6b7280;
  margin: 0 0 12px;
  line-height: 1.4;
}

.featured-meta {
  display: flex;
  gap: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
}

.meta-item ion-icon {
  font-size: 14px;
}

/* Quick Access Grid */
.quick-access-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.quick-access-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: #ffffff;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.quick-access-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.quick-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quick-icon.camera {
  background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
}

.quick-icon.notes {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
}

.quick-icon.calendar {
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
}

.quick-icon.settings {
  background: linear-gradient(135deg, #6b7280 0%, #9ca3af 100%);
}

.quick-icon ion-icon {
  font-size: 24px;
  color: #ffffff;
}

.quick-access-card span {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .dashboard-content {
    --background: #0f0f1a;
  }

  .section-title {
    color: #f9fafb;
  }

  .progress-card,
  .continue-card,
  .featured-card,
  .quick-access-card {
    background: #1e1e2e;
  }

  .section-title h3,
  .featured-title,
  .continue-title {
    color: #f9fafb;
  }

  .section-title p,
  .featured-description,
  .continue-description {
    color: rgba(255, 255, 255, 0.6);
  }

  .progress-stat strong {
    color: #f9fafb;
  }
}
</style>
