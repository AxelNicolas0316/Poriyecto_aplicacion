# 🛠️ Comandos Útiles - Riksiri App

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Instalar dependencias desde cero
rm -rf node_modules package-lock.json
npm install
```

---

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Iniciar con Ionic
npm run ionic:serve

# Iniciar y abrir en navegador
npm run dev -- --open
```

---

## 📱 Build

```bash
# Build para producción (web)
npm run build

# Preview del build
npm run preview

# Build para Ionic
npm run ionic:build
```

---

## 🧪 Testing

```bash
# Tests unitarios
npm run test:unit

# Tests E2E
npm run test:e2e

# Tests en modo watch
npm run test:unit -- --watch
```

---

## 🔍 Calidad de Código

```bash
# Linting
npm run lint

# Linting con fix
npm run lint -- --fix

# Verificar tipos TypeScript
npx vue-tsc --noEmit
```

---

## 📂 Capacitor

```bash
# Sync con plataformas nativas
npx cap sync

# Sync Android
npx cap sync android

# Sync iOS
npx cap sync ios

# Abrir Android Studio
npx cap open android

# Abrir Xcode
npx cap open ios

# Ejecutar en Android
npx cap run android

# Ejecutar en iOS
npx cap run ios
```

---

## 🔧 Limpieza

```bash
# Limpiar caché de npm
npm cache clean --force

# Limpiar build
rm -rf dist

# Limpiar todo y reinstalar
rm -rf node_modules dist package-lock.json
npm install
```

---

## 🎨 Utilidades

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar dependencias
npm update

# Instalar actualización mayor
npm install <package>@latest

# Ver árbol de dependencias
npm list --depth=0
```

---

## 📊 Análisis

```bash
# Analizar bundle
npm run build -- --mode=analyze

# Ver tamaño de dependencias
npx webpack-bundle-analyzer dist/stats.json
```

---

## 🔐 Seguridad

```bash
# Auditar dependencias
npm audit

# Fix automático de vulnerabilidades
npm audit fix

# Fix forzoso (puede breaking changes)
npm audit fix --force
```

---

## 🌍 Variables de Entorno

Crear archivo `.env` en la raíz:

```env
VITE_API_BASE_URL=https://api.riksiri.com/api/
VITE_APP_TITLE=Riksiri
VITE_APP_VERSION=1.0.0
```

---

## 📱 Emuladores

### Android
```bash
# Listar dispositivos
adb devices

# Iniciar emulador
emulator -avd <nombre_avd>

# Instalar APK
adb install app.apk
```

### iOS
```bash
# Listar simuladores
xcrun simctl list devices

# Iniciar simulador
open -a Simulator
```

---

## 🐛 Debugging

```bash
# Ver logs de Android
adb logcat | grep "console"

# Ver logs de iOS
xcrun simctl launch booted <bundle-id>
```

---

## 📸 Recursos

```bash
# Generar recursos con Capacitor Assets
npx @capacitor/assets generate

# Generar iconos
npx @capacitor/assets generate --iconSrc ./assets/icon.png

# Generar splash screens
npx @capacitor/assets generate --splashSrc ./assets/splash.png
```

---

## 🎯 Comandos Rápidos

```bash
# Dev + open
npm run dev -- --open

# Build + preview
npm run build && npm run preview

# Lint + build
npm run lint && npm run build

# Test + build
npm run test:unit && npm run build
```

---

## 📞 Soporte

### Problemas Comunes

**Puerto ocupado:**
```bash
# Matar proceso en puerto 5173
npx kill-port 5173
```

**Permisos en Mac/Linux:**
```bash
sudo chown -R $(whoami) node_modules
```

**Cache de Vite:**
```bash
rm -rf node_modules/.vite
```

---

## 🔗 Enlaces Útiles

- [Ionic Docs](https://ionicframework.com/docs)
- [Vue Docs](https://vuejs.org/)
- [Capacitor Docs](https://capacitorjs.com/)
- [Vite Docs](https://vitejs.dev/)

---

<div align="center">

**¡Guarda esta guía para referencia rápida! 🔖**

</div>
