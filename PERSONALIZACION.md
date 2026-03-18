# 🎨 Guía de Personalización - Riksiri

Esta guía te ayudará a personalizar cada aspecto de tu aplicación Riksiri.

---

## 📋 Tabla de Contenidos

1. [Colores del Tema](#colores-del-tema)
2. [Gradientes](#gradientes)
3. [Tipografía](#tipografía)
4. [Animaciones](#animaciones)
5. [Componentes](#componentes)
6. [Iconos](#iconos)

---

## 🎨 Colores del Tema

### Ubicación
`src/theme/variables.css`

### Colores Principales

```css
:root {
  /* Color Primario - Botones principales, enlaces */
  --ion-color-primary: #4f46e5;
  
  /* Color Secundario - Elementos secundarios */
  --ion-color-secondary: #06b6d4;
  
  /* Color Terciario - Acentos */
  --ion-color-tertiary: #8b5cf6;
  
  /* Éxito - Mensajes positivos, completado */
  --ion-color-success: #10b981;
  
  /* Advertencia - Alertas, precauciones */
  --ion-color-warning: #f59e0b;
  
  /* Peligro - Errores, eliminaciones */
  --ion-color-danger: #ef4444;
}
```

### Paletas Sugeridas

#### Azul Profesional
```css
--ion-color-primary: #2563eb;
--ion-color-secondary: #0891b2;
--ion-color-tertiary: #7c3aed;
```

#### Verde Natural
```css
--ion-color-primary: #059669;
--ion-color-secondary: #0891b2;
--ion-color-tertiary: #65a30d;
```

#### Rojo Vibrante
```css
--ion-color-primary: #dc2626;
--ion-color-secondary: #ea580c;
--ion-color-tertiary: #db2777;
```

#### Morado Creativo
```css
--ion-color-primary: #7c3aed;
--ion-color-secondary: #db2777;
--ion-color-tertiary: #2563eb;
```

---

## 🌈 Gradientes

### Gradientes Predeterminados

```css
--gradient-primary: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
--gradient-secondary: linear-gradient(135deg, #06b6d4 0%, #4f46e5 100%);
--gradient-success: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
--gradient-warm: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
--gradient-cool: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
```

### Crear Nuevos Gradientes

```css
/* Gradiente de 3 colores */
--gradient-sunset: linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #db2777 100%);

/* Gradiente vertical */
--gradient-vertical: linear-gradient(to bottom, #4f46e5 0%, #8b5cf6 100%);

/* Gradiente horizontal */
--gradient-horizontal: linear-gradient(to right, #4f46e5 0%, #8b5cf6 100%);

/* Gradiente radial */
--gradient-radial: radial-gradient(circle, #4f46e5 0%, #8b5cf6 100%);
```

### Aplicar Gradientes

```vue
<!-- En templates -->
<ion-button style="--background: var(--gradient-primary)">
  Botón
</ion-button>

<!-- En CSS -->
.mi-clase {
  background: var(--gradient-primary);
}
```

---

## 🔤 Tipografía

### Fuente Actual
**Inter** - Una fuente moderna y legible

### Cambiar la Fuente

#### 1. Editar `index.html`

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

#### 2. Editar `src/theme/variables.css`

```css
:root {
  --font-family-base: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Fuentes Sugeridas

| Estilo | Fuente | Import |
|--------|--------|--------|
| Moderno | Inter | `Inter:wght@300;400;500;600;700;800` |
| Amigable | Poppins | `Poppins:wght@300;400;500;600;700;800` |
| Profesional | Roboto | `Roboto:wght@300;400;500;700;900` |
| Elegante | Montserrat | `Montserrat:wght@300;400;500;600;700;800` |
| Creativo | Nunito | `Nunito:wght@300;400;600;700;800` |

---

## ✨ Animaciones

### Animaciones Disponibles

```css
/* Fade In */
.fade-in {
  animation: fadeIn 0.5s ease-out;
}

/* Fade In Up */
.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Scale In */
.scale-in {
  animation: scaleIn 0.5s ease-out;
}

/* Slide In Left */
.slide-in-left {
  animation: slideInLeft 0.5s ease-out;
}

/* Float */
.float {
  animation: float 3s ease-in-out infinite;
}

/* Glow */
.glow {
  animation: glow 2s ease-in-out infinite;
}
```

### Crear Nuevas Animaciones

```css
@keyframes miAnimacion {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.mi-elemento {
  animation: miAnimacion 2s ease-in-out infinite;
}
```

### Duraciones de Transición

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## 🧩 Componentes

### Botones

#### Botón con Gradiente
```vue
<ion-button class="gradient-primary">
  Texto
</ion-button>
```

#### Botón Redondo
```vue
<ion-button class="button-round">
  Texto
</ion-button>
```

#### Botón Grande
```vue
<ion-button class="button-large" size="large">
  Texto
</ion-button>
```

### Tarjetas

#### Tarjeta Premium
```vue
<div class="card-premium hover-lift">
  Contenido
</div>
```

### Inputs

#### Input Personalizado
```vue
<ion-input class="custom-input" fill="outline">
  <ion-icon name="person-outline" slot="start"></ion-icon>
</ion-input>
```

### Badges

```vue
<span class="badge-primary">
  <ion-icon name="star"></ion-icon>
  Premium
</span>
```

---

## 🎯 Iconos

### FontAwesome (Incluido)

```vue
<!-- Icono sólido -->
<ion-icon name="heart"></ion-icon>

<!-- Icono regular -->
<ion-icon name="fas fa-heart"></ion-icon>

<!-- Icono de marca -->
<ion-icon name="fab fa-google"></ion-icon>
```

### Ionicons (Nativo de Ionic)

```vue
<ion-icon name="home-outline"></ion-icon>
<ion-icon name="settings-sharp"></ion-icon>
<ion-icon name="person-circle"></ion-icon>
```

### Buscar Iconos

- **Ionicons:** https://ionic.io/ionicons
- **FontAwesome:** https://fontawesome.com/icons

---

## 📱 Responsive

### Breakpoints

```css
/* Mobile */
@media (max-width: 576px) { }

/* Tablet */
@media (min-width: 577px) and (max-width: 768px) { }

/* Desktop */
@media (min-width: 769px) { }
```

### Clases de Utilidad

```css
.hide-mobile      /* Ocultar en móvil */
.hide-desktop     /* Ocultar en desktop */
.text-center      /* Texto centrado */
.flex-center      /* Flex centrado */
```

---

## 🌙 Modo Oscuro

El modo oscuro se activa automáticamente según la preferencia del sistema.

### Forzar Modo Oscuro

En `src/main.ts`, descomenta:

```css
@import '@ionic/vue/css/palettes/dark.always.css';
```

### Personalizar Modo Oscuro

En `src/theme/variables.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --ion-background-color: #0f0f1a;
    --ion-text-color: #f9fafb;
    /* ... más personalizaciones */
  }
}
```

---

## 🎨 Ejemplos de Temas Completos

### Tema Oceano

```css
:root {
  --ion-color-primary: #0077b6;
  --ion-color-secondary: #00b4d8;
  --ion-color-tertiary: #90e0ef;
  --gradient-primary: linear-gradient(135deg, #0077b6 0%, #00b4d8 100%);
}
```

### Tema Bosque

```css
:root {
  --ion-color-primary: #2d6a4f;
  --ion-color-secondary: #40916c;
  --ion-color-tertiary: #74c69d;
  --gradient-primary: linear-gradient(135deg, #2d6a4f 0%, #40916c 100%);
}
```

### Tema Atardecer

```css
:root {
  --ion-color-primary: #f72585;
  --ion-color-secondary: #b5179e;
  --ion-color-tertiary: #7209b7;
  --gradient-primary: linear-gradient(135deg, #f72585 0%, #b5179e 100%);
}
```

### Tema Minimalista

```css
:root {
  --ion-color-primary: #000000;
  --ion-color-secondary: #333333;
  --ion-color-tertiary: #666666;
  --gradient-primary: linear-gradient(135deg, #000000 0%, #333333 100%);
}
```

---

## 💡 Tips de Personalización

1. **Mantén la consistencia** - Usa la misma paleta en toda la app
2. **Contraste adecuado** - Asegura legibilidad
3. **Prueba en diferentes dispositivos** - Responsive es clave
4. **Accesibilidad** - Considera usuarios con discapacidades visuales
5. **Performance** - No abuses de las animaciones

---

## 📚 Recursos Adicionales

- [Documentación de Ionic](https://ionicframework.com/docs)
- [Vue.js Guide](https://vuejs.org/guide/)
- [CSS Tricks](https://css-tricks.com/)
- [Color Hunt - Paletas](https://colorhunt.co/)
- [Coolors - Generador](https://coolors.co/)

---

<div align="center">

**¡Personaliza tu app y hazla única! 🎨**

</div>
