<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Contenido</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding" v-if="!loading && contentStore.content.contenido">
      <div v-html="contentStore.content.contenido.contenido"></div>
      
      <div class="video-container" v-if="contentStore.content.contenido.youtube">
        <iframe
          width="100%"
          height="315"
          :src="'https://www.youtube.com/embed/' + contentStore.content.contenido.youtube.replace('https://youtu.be/', '')"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      
      <ion-button expand="block" class="ion-margin-top" @click="siguiente">
        Siguiente
      </ion-button>
    </ion-content>
    
    <ion-content class="ion-padding" v-else-if="!loading">
      <p>No hay contenido disponible</p>
    </ion-content>
    
    <ion-content class="ion-padding" v-else>
      <ion-spinner name="crescent"></ion-spinner>
      <p>Cargando contenido...</p>
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
  IonButtons,
  IonMenuButton,
  IonButton,
  IonSpinner
} from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
import { useContentStore } from '@/stores/content';
import { onMounted, ref } from 'vue';

const route = useRoute();
const router = useRouter();
const contentStore = useContentStore();

const loading = ref(false);

onMounted(() => {
  if (route.params.name) {
    contentStore.$getContenido(route.params.name as string);
  }
});

function siguiente() {
  if (contentStore.next.url) {
    router.push('/' + contentStore.next.url);
    contentStore.$seteaSiguiente();
  }
}
</script>

<style scoped>
.video-container {
  margin-top: 20px;
  border-radius: 12px;
  overflow: hidden;
}
</style>
