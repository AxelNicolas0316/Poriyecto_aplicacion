<template>
  <ion-page class="login-page">
    <ion-content :fullscreen="true" class="login-content">
      <div class="login-container">
        <!-- Logo y Título -->
        <div class="login-header">
          <div class="logo-container">
            <div class="logo-icon">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h1 class="logo-text">Riksiri</h1>
          </div>
          <p class="logo-subtitle">Tu plataforma de aprendizaje</p>
        </div>

        <!-- Formulario de Login -->
        <div class="login-form">
          <h2 class="form-title">¡Bienvenido de nuevo!</h2>
          <p class="form-subtitle">Ingresa tus credenciales para continuar</p>

          <div class="input-group">
            <div class="input-wrapper">
              <ion-icon name="person-outline" class="input-icon"></ion-icon>
              <ion-input
                v-model="username"
                type="text"
                placeholder="Usuario"
                class="custom-input"
                :clear-input="true"
              ></ion-input>
            </div>
          </div>

          <div class="input-group">
            <div class="input-wrapper">
              <ion-icon name="lock-closed-outline" class="input-icon"></ion-icon>
              <ion-input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Contraseña"
                class="custom-input"
              ></ion-input>
              <ion-icon
                :name="showPassword ? 'eye-off-outline' : 'eye-outline'"
                class="password-toggle"
                @click="showPassword = !showPassword"
              ></ion-icon>
            </div>
          </div>

          <div class="form-options">
            <ion-checkbox v-model="rememberMe" label-placement="end">
              Recordarme
            </ion-checkbox>
            <a href="#" class="forgot-link">¿Olvidaste tu contraseña?</a>
          </div>

          <ion-button
            class="login-button"
            @click="handleLogin"
            :disabled="loading"
            expand="block"
          >
            <ion-spinner v-if="loading" name="crescent"></ion-spinner>
            <span v-else>Ingresar</span>
          </ion-button>

          <div class="divider">
            <span>o</span>
          </div>

          <ion-button
            class="register-button"
            fill="outline"
            @click="goToRegister"
            expand="block"
          >
            Crear una cuenta nueva
          </ion-button>
        </div>

        <!-- Decoración de fondo -->
        <div class="background-decoration">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, IonContent, IonInput, IonButton, IonIcon, 
  IonCheckbox, IonSpinner 
} from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const userStore = useUserStore();

const username = ref('');
const password = ref('');
const showPassword = ref(false);
const rememberMe = ref(false);
const loading = ref(false);

async function handleLogin() {
  if (!username.value || !password.value) {
    const alert = await import('@ionic/vue');
    const alertController = await alert.alertController.create({
      header: 'Error',
      message: 'Por favor ingresa usuario y contraseña',
      buttons: ['OK']
    });
    await alertController.present();
    return;
  }

  loading.value = true;

  try {
    userStore.login.username = username.value;
    userStore.login.password = password.value;
    
    await userStore.$login();
    
    // Redirigir al home después del login exitoso
    router.push('/home');
  } catch (error: any) {
    // Si falla el backend, usar login demo
    console.log('Backend no disponible, usando login demo...');
    try {
      await userStore.$loginDemo(username.value, password.value);
      router.push('/home');
    } catch (demoError) {
      const alert = await import('@ionic/vue');
      const alertController = await alert.alertController.create({
        header: 'Error de Login',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alertController.present();
    }
  } finally {
    loading.value = false;
  }
}

function goToRegister() {
  router.push('/registro');
}
</script>

<style scoped>
.login-page {
  --background: transparent;
}

.login-content {
  --background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

.login-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 24px;
  position: relative;
  z-index: 1;
}

/* Header */
.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}

.logo-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.logo-icon ion-icon {
  font-size: 32px;
  color: #ffffff;
}

.logo-text {
  font-size: 36px;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
}

.logo-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Form */
.login-form {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.form-title {
  font-size: 26px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 8px;
  text-align: center;
}

.form-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 32px;
  text-align: center;
}

/* Inputs */
.input-group {
  margin-bottom: 20px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #f3f4f6;
  border-radius: 14px;
  padding: 0 16px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  border-color: #667eea;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
}

.input-icon {
  font-size: 20px;
  color: #9ca3af;
  margin-right: 12px;
}

.custom-input {
  flex: 1;
  --padding-top: 16px;
  --padding-bottom: 16px;
  --padding-start: 0;
  --padding-end: 0;
  --placeholder-color: #9ca3af;
  --color: #1f2937;
  font-size: 15px;
}

.password-toggle {
  font-size: 20px;
  color: #9ca3af;
  cursor: pointer;
  padding: 8px;
  transition: color 0.2s ease;
}

.password-toggle:hover {
  color: #667eea;
}

/* Options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

ion-checkbox {
  --size: 18px;
  --checkbox-background: #f3f4f6;
  --checkbox-background-checked: #667eea;
  --border-radius: 4px;
  font-size: 14px;
  color: #6b7280;
}

.forgot-link {
  font-size: 14px;
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.forgot-link:hover {
  text-decoration: underline;
}

/* Buttons */
.login-button {
  --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --border-radius: 14px;
  --padding-top: 16px;
  --padding-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.login-button:disabled {
  opacity: 0.7;
}

.login-button ion-spinner {
  width: 24px;
  height: 24px;
  color: #ffffff;
}

.divider {
  display: flex;
  align-items: center;
  margin: 24px 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

.divider span {
  padding: 0 16px;
  font-size: 14px;
  color: #9ca3af;
}

.register-button {
  --border-radius: 14px;
  --padding-top: 16px;
  --padding-bottom: 16px;
  font-size: 15px;
  font-weight: 600;
  --color: #667eea;
  --border-color: #667eea;
}

/* Background Decoration */
.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 8s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: -50px;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  right: -30px;
  animation-delay: 3s;
}

.circle-3 {
  width: 100px;
  height: 100px;
  top: 50%;
  right: 10%;
  animation-delay: 6s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(180deg); }
}

/* Responsive */
@media (max-width: 480px) {
  .login-form {
    padding: 24px 20px;
  }

  .form-title {
    font-size: 22px;
  }

  .logo-text {
    font-size: 28px;
  }

  .logo-icon {
    width: 50px;
    height: 50px;
  }

  .logo-icon ion-icon {
    font-size: 26px;
  }
}
</style>
