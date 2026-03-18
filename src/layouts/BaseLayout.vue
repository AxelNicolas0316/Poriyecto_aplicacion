<template>
  <ion-page>
    <ion-menu content-id="main-content" side="start" class="premium-menu">
      <ion-header class="menu-header">
        <ion-toolbar color="transparent">
          <div class="user-section">
            <div class="user-avatar">
              <div class="avatar-placeholder">{{ userLetter }}</div>
            </div>
            <div class="user-info">
              <h3 class="user-name">{{ userName }}</h3>
              <p class="user-role">Estudiante Premium</p>
            </div>
          </div>
        </ion-toolbar>
      </ion-header>
      
      <ion-content class="menu-content">
        <!-- Acciones Principales -->
        <div class="menu-section">
          <div class="section-title">
            <ion-icon name="apps-outline"></ion-icon>
            <span>Principal</span>
          </div>
          
          <div class="action-grid">
            <div class="action-card" @click="router.push('/home')">
              <div class="action-icon home">
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <span>Inicio</span>
            </div>
            <div class="action-card" @click="router.push('/camara')">
              <div class="action-icon camera">
                <ion-icon name="camera-outline"></ion-icon>
              </div>
              <span>Cámara</span>
            </div>
            <div class="action-card">
              <div class="action-icon courses">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <span>Cursos</span>
            </div>
            <div class="action-card">
              <div class="action-icon calendar">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <span>Horario</span>
            </div>
          </div>
        </div>

        <!-- Navegación por Secciones -->
        <div class="menu-section">
          <div class="section-title">
            <ion-icon name="folder-outline"></ion-icon>
            <span>Contenidos</span>
          </div>
          
          <ion-list class="nav-list">
            <ion-accordion-group :animated="true">
              <ion-accordion 
                v-for="(menuSection, index) in menu" 
                :key="index" 
                :value="'menu-'+index"
                class="custom-accordion">
                
                <ion-item slot="header" class="accordion-header">
                  <div class="menu-icon-wrapper">
                    <ion-icon :name="menuSection.icon || 'folder-outline'"></ion-icon>
                  </div>
                  <ion-label class="menu-label">{{ menuSection.name }}</ion-label>
                  <ion-icon name="chevron-forward-outline" class="chevron-icon"></ion-icon>
                </ion-item>
                
                <div slot="content" class="accordion-content">
                  <ion-item 
                    v-for="(subItem, itemIndex) in menuSection.sub" 
                    :key="itemIndex"
                    :router-link="'/'+subItem.url"
                    v-if="subItem.active === 'yes'"
                    :class="{ 'active-item': isActive(subItem.url) }"
                    button>
                    <div class="submenu-dot" v-if="isActive(subItem.url)"></div>
                    <ion-label>{{ subItem.name }}</ion-label>
                    <ion-icon name="checkmark-circle" class="completed-icon" v-if="subItem.completed"></ion-icon>
                  </ion-item>
                </div>
              </ion-accordion>
            </ion-accordion-group>
          </ion-list>
        </div>

        <!-- Herramientas -->
        <div class="menu-section">
          <div class="section-title">
            <ion-icon name="construct-outline"></ion-icon>
            <span>Herramientas</span>
          </div>
          
          <div class="tools-list">
            <div class="tool-item" @click="router.push('/camara')">
              <div class="tool-icon camera-tool">
                <ion-icon name="camera-outline"></ion-icon>
              </div>
              <div class="tool-info">
                <span class="tool-name">Cámara</span>
                <span class="tool-desc">Escanear documentos</span>
              </div>
            </div>
            <div class="tool-item">
              <div class="tool-icon notes-tool">
                <ion-icon name="document-text-outline"></ion-icon>
              </div>
              <div class="tool-info">
                <span class="tool-name">Notas</span>
                <span class="tool-desc">Mis apuntes</span>
              </div>
            </div>
            <div class="tool-item">
              <div class="tool-icon history-tool">
                <ion-icon name="time-outline"></ion-icon>
              </div>
              <div class="tool-info">
                <span class="tool-name">Historial</span>
                <span class="tool-desc">Actividad reciente</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Estadísticas -->
        <div class="menu-section stats-section">
          <div class="stats-card">
            <div class="stats-header">
              <ion-icon name="trophy-outline"></ion-icon>
              <span>Tu Progreso</span>
            </div>
            <div class="stats-bar">
              <div class="stats-bar-fill" style="width: 65%"></div>
            </div>
            <p class="stats-text">65% completado</p>
          </div>
          
          <div class="stats-grid">
            <div class="stat-mini">
              <ion-icon name="book-outline"></ion-icon>
              <span>12</span>
              <small>Lecciones</small>
            </div>
            <div class="stat-mini">
              <ion-icon name="flame-outline"></ion-icon>
              <span>5</span>
              <small>Racha</small>
            </div>
            <div class="stat-mini">
              <ion-icon name="star-outline"></ion-icon>
              <span>850</span>
              <small>Puntos</small>
            </div>
          </div>
        </div>
      </ion-content>

      <!-- Footer -->
      <ion-footer class="menu-footer">
        <ion-button fill="clear" class="logout-button" @click="logout">
          <ion-icon name="log-out-outline" slot="start"></ion-icon>
          <ion-label>Cerrar Sesión</ion-label>
        </ion-button>
      </ion-footer>
    </ion-menu>

    <!-- Header Principal -->
    <ion-header class="main-header" translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button class="menu-button">
            <ion-icon name="menu-outline"></ion-icon>
          </ion-menu-button>
        </ion-buttons>
        
        <ion-title class="header-title">
          <div class="title-content">
            <ion-icon name="book-outline"></ion-icon>
            <span>Riksiri</span>
          </div>
        </ion-title>

        <ion-buttons slot="end">
          <ion-button class="notification-button">
            <ion-icon name="notifications-outline"></ion-icon>
            <span class="notification-badge">3</span>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      
      <ion-progress-bar type="indeterminate" color="primary" v-if="loading"></ion-progress-bar>
    </ion-header>

    <!-- Contenido Principal -->
    <ion-content id="main-content" :scroll-y="true">
      <ion-router-outlet />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, IonMenu, IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonMenuButton, IonList, IonItem, IonLabel, 
  IonAccordion, IonAccordionGroup, IonRouterOutlet, IonIcon, 
  IonButton, IonFooter, IonProgressBar 
} from '@ionic/vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useContentStore } from '@/stores/content';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const contentStore = useContentStore();

const userLetter = computed(() => {
  const name = userStore.user?.usuario || 'U';
  return name.charAt(0).toUpperCase();
});

const userName = computed(() => {
  return userStore.user?.usuario || 'Usuario';
});

const menu = computed(() => {
  return contentStore.menu || [];
});

const loading = computed(() => {
  return contentStore.loading;
});

function isActive(url: string): boolean {
  return route.path === '/' + url;
}

async function logout() {
  await userStore.$setLogin(null);
  router.push('/login');
}
</script>

<style scoped>
/* Menú Premium */
.premium-menu {
  --background: linear-gradient(180deg, #1e1e2e 0%, #27273a 100%);
  --width: 300px;
}

.premium-menu::part(backdrop) {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.premium-menu::part(container) {
  border-radius: 0 24px 24px 0;
  box-shadow: 10px 0 40px rgba(0, 0, 0, 0.3);
}

/* Header del Menú */
.menu-header {
  background: transparent;
  padding: max(var(--status-bar-padding), 16px) 20px 20px;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.user-avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 4px;
}

.user-role {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* Contenido del Menú */
.menu-content {
  --padding-top: 16px;
  --padding-bottom: 16px;
}

.menu-section {
  padding: 0 16px 20px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin-bottom: 12px;
}

.section-title ion-icon {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
}

.section-title span {
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Action Grid */
.action-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 14px 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.action-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  border-color: rgba(79, 70, 229, 0.3);
}

.action-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-icon.home {
  background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
}

.action-icon.camera {
  background: linear-gradient(135deg, #06b6d4 0%, #4f46e5 100%);
}

.action-icon.courses {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
}

.action-icon.calendar {
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
}

.action-icon ion-icon {
  font-size: 22px;
  color: #ffffff;
}

.action-card span {
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

/* Navigation List */
.nav-list {
  --padding-top: 0;
  --padding-bottom: 0;
}

.custom-accordion {
  --background: transparent;
  margin-bottom: 8px;
}

.custom-accordion::part(header) {
  --background: rgba(255, 255, 255, 0.05);
  --border-radius: 12px;
  --min-height: 50px;
}

.custom-accordion.accordion-expanded::part(header) {
  --background: rgba(79, 70, 229, 0.2);
}

.accordion-header {
  --background: transparent;
  --padding-top: 12px;
  --padding-bottom: 12px;
  --padding-start: 16px;
  --padding-end: 16px;
}

.menu-icon-wrapper {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.menu-icon-wrapper ion-icon {
  font-size: 18px;
  color: #4f46e5;
}

.menu-label {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.chevron-icon {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
}

.accordion-content {
  background: rgba(0, 0, 0, 0.2);
  padding: 8px 0;
}

.submenu-item {
  --background: transparent;
  --padding-top: 12px;
  --padding-bottom: 12px;
  --padding-start: 50px;
  --padding-end: 16px;
}

.submenu-item.active-item {
  --background: rgba(79, 70, 229, 0.15);
}

.submenu-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4f46e5;
  margin-right: 12px;
  margin-left: 8px;
}

.submenu-item ion-label {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

.submenu-item.active-item ion-label {
  color: #ffffff;
  font-weight: 600;
}

.completed-icon {
  font-size: 16px;
  color: #10b981;
  margin-left: auto;
}

/* Tools List */
.tools-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tool-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tool-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.tool-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-icon.camera-tool {
  background: linear-gradient(135deg, #06b6d4 0%, #4f46e5 100%);
}

.tool-icon.notes-tool {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
}

.tool-icon.history-tool {
  background: linear-gradient(135deg, #6b7280 0%, #9ca3af 100%);
}

.tool-icon ion-icon {
  font-size: 20px;
  color: #ffffff;
}

.tool-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tool-name {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
}

.tool-desc {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
}

/* Stats Section */
.stats-section {
  padding-bottom: 12px;
}

.stats-card {
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
  border: 1px solid rgba(79, 70, 229, 0.3);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 12px;
}

.stats-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.stats-header ion-icon {
  font-size: 18px;
  color: #f59e0b;
}

.stats-header span {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
}

.stats-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.stats-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #4f46e5 0%, #8b5cf6 100%);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
}

.stats-text {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  text-align: right;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.stat-mini {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.stat-mini ion-icon {
  font-size: 18px;
  color: #4f46e5;
}

.stat-mini span {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
}

.stat-mini small {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
}

/* Footer */
.menu-footer {
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 16px 20px;
}

.logout-button {
  --background: transparent;
  --border-radius: 12px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  --padding-start: 16px;
  --padding-end: 16px;
  width: 100%;
  justify-content: flex-start;
  color: #ef4444;
}

.logout-button:hover {
  --background: rgba(239, 68, 68, 0.1);
}

.logout-button ion-icon {
  font-size: 20px;
  color: #ef4444;
}

.logout-button ion-label {
  font-size: 14px;
  font-weight: 600;
  color: #ef4444;
}

/* Header Principal */
.main-header {
  --background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.main-header ion-toolbar {
  --background: transparent;
  --padding-top: max(var(--status-bar-padding), 8px);
}

.menu-button {
  --border-radius: 12px;
  --padding-start: 12px;
  --padding-end: 12px;
}

.menu-button ion-icon {
  font-size: 24px;
  color: #4f46e5;
}

.header-title {
  font-weight: 700;
  font-size: 18px;
}

.title-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-content ion-icon {
  font-size: 22px;
  color: #4f46e5;
}

.notification-button {
  --border-radius: 12px;
  position: relative;
}

.notification-button ion-icon {
  font-size: 24px;
  color: var(--ion-color-dark);
}

.notification-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  background: linear-gradient(135deg, #ef4444 0%, #f59e0b 100%);
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
}

ion-progress-bar {
  --background: transparent;
  --progress-background: #4f46e5;
  height: 3px;
}
</style>
