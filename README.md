# 🚀 Riksiri - Plataforma Educativa Premium

<div align="center">

![Riksiri Banner](https://img.shields.io/badge/Riksiri-Plataforma%20Educativa-4f46e5?style=for-the-badge)

**Una aplicación educativa moderna construida con Ionic Vue y Capacitor**

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4fc085?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Ionic](https://img.shields.io/badge/Ionic-8.7-3880ff?style=flat-square&logo=ionic&logoColor=white)](https://ionicframework.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 📖 Tabla de Contenidos

- [✨ Características](#-características)
- [🎨 Diseño Premium](#-diseño-premium)
- [🛠️ Instalación](#️-instalación)
- [🚀 Desarrollo](#-desarrollo)
- [📱 Build para Producción](#-build-para-producción)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎯 Tecnologías](#-tecnologías)
- [👨‍💻 Autor](#-autor)

---

## ✨ Características

### 🔐 Autenticación
- ✅ Login moderno con validación
- ✅ Registro de usuarios con validación en tiempo real
- ✅ Gestión de sesiones con tokens JWT
- ✅ Protección de rutas

### 📚 Contenido Educativo
- ✅ Visualización de contenidos enriquecidos
- ✅ Soporte para videos de YouTube
- ✅ Navegación entre lecciones
- ✅ Sistema de menús accordion
- ✅ Marcadores de progreso

### 📷 Cámara
- ✅ Captura de fotos integrada
- ✅ Edición básica de imágenes
- ✅ Galería de imágenes capturadas
- ✅ Interfaz intuitiva

### 🎨 UI/UX Premium
- ✅ **Diseño moderno con gradientes**
- ✅ **Animaciones suaves y transiciones**
- ✅ **Modo oscuro automático**
- ✅ **Totalmente responsive**
- ✅ **Skeleton loading states**
- ✅ **Splash screen personalizado**
- ✅ **Iconos de FontAwesome**
- ✅ **Tipografía Inter optimizada**

### 🔔 Notificaciones
- ✅ Sistema de notificaciones visuales
- ✅ Alertas personalizadas
- ✅ Indicadores de carga

---

## 🎨 Diseño Premium

Este proyecto cuenta con un **diseño profesional de clase mundial** que incluye:

### Colores
- **Primario:** `#4f46e5` (Índigo vibrante)
- **Secundario:** `#06b6d4` (Cian moderno)
- **Terciario:** `#8b5cf6` (Violeta elegante)
- **Éxito:** `#10b981` (Verde esmeralda)
- **Advertencia:** `#f59e0b` (Ámbar cálido)
- **Peligro:** `#ef4444` (Rojo intenso)

### Gradientes Exclusivos
```css
--gradient-primary: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
--gradient-secondary: linear-gradient(135deg, #06b6d4 0%, #4f46e5 100%);
--gradient-success: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
```

### Sombras Elevadas
- Sombras suaves para profundidad
- Efectos glow para elementos interactivos
- Transiciones hover premium

### Animaciones
- Fade in/out
- Slide transitions
- Scale effects
- Floating elements
- Shimmer loading
- Pulse effects

---

## 🛠️ Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd 26.S1.DSOFT-3006.VR.A.3756

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_BASE_URL=https://api.riksiri.com/api/
```

---

## 🚀 Desarrollo

### Comandos Disponibles

```bash
# Desarrollo con hot-reload
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Tests E2E
npm run test:e2e

# Tests Unitarios
npm run test:unit

# Ionic Serve
npm run ionic:serve

# Ionic Build
npm run ionic:build
```

---

## 📱 Build para Producción

### Web
```bash
npm run build
```

### Android
```bash
npm run build
npx cap sync android
npx cap open android
```

### iOS
```bash
npm run build
npx cap sync ios
npx cap open ios
```

---

## 📁 Estructura del Proyecto

```
26.S1.DSOFT-3006.VR.A.3756/
├── src/
│   ├── assets/              # Recursos estáticos
│   ├── axios/               # Configuración de Axios
│   ├── components/          # Componentes reutilizables
│   │   └── Skeleton.vue     # Loading skeleton premium
│   ├── layouts/             # Layouts principales
│   │   └── BaseLayout.vue   # Layout con menú lateral
│   ├── router/              # Configuración de rutas
│   │   └── index.ts
│   ├── stores/              # Pinia stores
│   │   ├── user.ts          # Store de usuarios
│   │   └── content.ts       # Store de contenidos
│   ├── styles/              # Estilos globales
│   │   └── global.css       # Utilidades y componentes
│   ├── theme/               # Tema Ionic
│   │   └── variables.css    # Variables CSS premium
│   ├── views/               # Vistas principales
│   │   ├── Camara.vue       # Vista de cámara
│   │   ├── Login.vue        # Login premium
│   │   ├── Registro.vue     # Registro premium
│   │   └── Seccion.vue      # Contenido de lecciones
│   ├── App.vue              # Componente raíz
│   └── main.ts              # Punto de entrada
├── public/                  # Archivos públicos
├── index.html               # HTML principal
├── package.json             # Dependencias
├── vite.config.ts           # Configuración de Vite
├── tsconfig.json            # Configuración de TypeScript
└── ionic.config.json        # Configuración de Ionic
```

---

## 🎯 Tecnologías

### Frontend
- **Vue 3.5** - Framework progresivo
- **Ionic 8.7** - Framework UI móvil
- **TypeScript 5.9** - Tipado estático
- **Vite 7.3** - Build tool ultra-rápido
- **Vue Router 5** - Enrutamiento
- **Pinia 3** - State management
- **Axios** - Cliente HTTP

### Capacitor
- **@capacitor/core** - Core de Capacitor
- **@capacitor/camera** - Cámara nativa
- **@capacitor/android** - Plataforma Android
- **@capacitor/ios** - Plataforma iOS

### Estilos
- **FontAwesome 7** - Iconos
- **Inter Font** - Tipografía moderna
- **CSS Custom Properties** - Variables CSS

### Testing
- **Vitest** - Tests unitarios
- **Cypress** - Tests E2E

### Calidad de Código
- **ESLint** - Linting
- **Vue ESLint Config** - Reglas para Vue

---

## 🎨 Personalización

### Cambiar Colores del Tema

Edita `src/theme/variables.css`:

```css
:root {
  --ion-color-primary: #tu-color;
  --ion-color-secondary: #tu-color;
  /* ... */
}
```

### Modificar Gradientes

```css
--gradient-primary: linear-gradient(135deg, #color1 0%, #color2 100%);
```

### Cambiar Tipografía

Edita `index.html` y `src/theme/variables.css`:

```css
--font-family-base: 'Tu-Fuente', sans-serif;
```

---

## 📸 Capturas

El proyecto incluye:
- ✨ Login con fondo gradiente animado
- 🎨 Registro con validación visual
- 📱 Menú lateral premium con avatar
- 📖 Contenido de lecciones enriquecido
- 📷 Cámara con interfaz moderna
- ⏳ Skeleton loading states
- 🌙 Modo oscuro automático

---

## 🔒 Seguridad

- Tokens JWT para autenticación
- Protección de rutas
- Validación de formularios
- HTTPS recomendado para producción

---

## 📄 Licencia

Este proyecto es parte de un trabajo académico.

---

## 👨‍💻 Autor

**Axel** - *Desarrollador Full Stack*

---

## 🙏 Agradecimientos

- Ionic Framework por la excelente documentación
- Vue.js team por el framework increíble
- La comunidad de desarrolladores

---

<div align="center">

**¡Hecho con ❤️ para competir por el mejor diseño!**

⭐ ¡Si te gusta este proyecto, dale una estrella!

</div>
