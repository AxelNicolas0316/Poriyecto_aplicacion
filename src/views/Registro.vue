<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding">
      <div class="registro-wrapper">
        <h1 class="welcome-title">Crear Cuenta 🎉</h1>
        <p class="welcome-subtitle">Únete a Riksiri</p>
        
        <ion-card class="registro-card">
          <ion-card-content>
            <ion-input
              label="Usuario"
              label-placement="floating"
              fill="outline"
              v-model="usuario"
              placeholder="Elige un usuario"
            ></ion-input>
            
            <ion-input
              class="ion-margin-top"
              label="Email"
              label-placement="floating"
              fill="outline"
              type="email"
              v-model="email"
              placeholder="tu@email.com"
            ></ion-input>
            
            <ion-input
              class="ion-margin-top"
              label="Contraseña"
              label-placement="floating"
              fill="outline"
              type="password"
              v-model="password"
              placeholder="Elige una contraseña"
              @keyup.enter="registrarse"
            ></ion-input>
            
            <ion-button
              expand="block"
              class="ion-margin-top"
              @click="registrarse"
              :disabled="loading"
            >
              {{ loading ? 'Registrando...' : 'Registrarse' }}
            </ion-button>
            
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardContent,
  IonInput, 
  IonButton,
  IonButtons,
  IonBackButton,
  alertController 
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const userStore = useUserStore();

const usuario = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');

async function registrarse() {
  if (!usuario.value || !email.value || !password.value) {
    errorMessage.value = 'Todos los campos son requeridos';
    return;
  }
  
  loading.value = true;
  errorMessage.value = '';
  
  try {
    userStore.registro.usuario = usuario.value;
    userStore.registro.email = email.value;
    userStore.registro.password = password.value;
    
    await userStore.$registro();
    router.push('/home');
  } catch (err: any) {
    errorMessage.value = err.response?.data?.message || 'Error al registrarse';
    const alert = await alertController.create({
      header: 'Error',
      message: errorMessage.value,
      buttons: ['OK']
    });
    await alert.present();
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.registro-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
}

.welcome-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--ion-color-primary);
  margin-bottom: 8px;
  text-align: center;
}

.welcome-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

.registro-card {
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.error-message {
  color: var(--ion-color-danger);
  font-size: 14px;
  margin-top: 12px;
  text-align: center;
}
</style>
