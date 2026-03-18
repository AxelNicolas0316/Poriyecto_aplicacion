import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';

const Login = () => import('@/views/Login.vue');
const Registro = () => import('@/views/Registro.vue');
const Camara = () => import('@/views/Camara.vue');
const Seccion = () => import('@/views/Seccion.vue');
const Home = () => import('@/views/Home.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/home',
    name: 'Home',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: Home
      }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/camara',
    name: 'Camara',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: Camara
      }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/seccion',
    name: 'Seccion',  
    component: BaseLayout,
    children: [
      { 
        path: ':name',
        name: 'SeccionContenidos',
        component: Seccion,
      },
    ],
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Router guard - Proteger rutas
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  console.log('Navegando a:', to.path, 'Token:', token ? 'existe' : 'no existe');
  
  if (requiresAuth && !token) {
    // Si requiere auth y no hay token, ir a login
    console.log('Requiere auth, redirigiendo a login');
    next('/login');
  } else if ((to.path === '/login' || to.path === '/registro') && token) {
    // Si ya hay token y va a login/registro, ir a home
    console.log('Ya autenticado, redirigiendo a home');
    next('/home');
  } else if (to.path === '/' && token) {
    // Si va a root y hay token, ir a home
    console.log('Root con auth, redirigiendo a home');
    next('/home');
  } else {
    // Continuar normalmente
    next();
  }
});

export default router;
