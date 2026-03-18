# ⚡ Inicio Rápido - Riksiri

## 🚀 Ejecutar en 3 Pasos

### Paso 1: Abrir Terminal
```bash
cd "C:\Users\DELL\Documents\26.S1.DSOFT-3006.VR.A.3756"
```

### Paso 2: Instalar Dependencias (solo la primera vez)
```bash
npm install
```

### Paso 3: Iniciar la App
```bash
npm run dev
```

¡Listo! Tu app estará corriendo en `http://localhost:5173`

---

## 📱 Comandos Esenciales

```bash
# Desarrollo
npm run dev              # Iniciar servidor
npm run ionic:serve      # Iniciar con Ionic

# Build
npm run build            # Compilar para producción
npm run preview          # Ver build localmente

# Tests
npm run test:unit        # Tests unitarios
npm run test:e2e         # Tests E2E

# Calidad
npm run lint             # Verificar código
npm run lint -- --fix    # Corregir código
```

---

## 🎯 Primeros Pasos

### 1. Ver la App
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`

### 2. Probar Login
- Usuario: (cualquiera)
- Contraseña: (cualquiera)
- La API es: `https://api.riksiri.com/api/`

### 3. Explorar
- Navega por el menú lateral
- Abre una lección
- Prueba la cámara
- Cambia a modo oscuro en tu sistema

### 4. Personalizar
Edita `src/theme/variables.css` para cambiar colores.

---

## 📚 Documentación Rápida

| Archivo | Para Qué |
|---------|----------|
| `README.md` | Descripción completa |
| `CARTA_PARA_AXEL.md` | Guía personal |
| `PERSONALIZACION.md` | Cambiar colores/fuentes |
| `PRESENTACION.md` | Cómo presentar |
| `COMANDOS.md` | Todos los comandos |

---

## 🐛 Problemas Comunes

### Puerto Ocupado
```bash
npx kill-port 5173
```

### Error de Dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

### Cache de Vite
```bash
rm -rf node_modules/.vite
npm run dev
```

---

## 🎨 Personalización Rápida

### Cambiar Color Primario
Edita `src/theme/variables.css`:
```css
--ion-color-primary: #tu-color;
```

### Cambiar Gradiente
```css
--gradient-primary: linear-gradient(135deg, #color1 0%, #color2 100%);
```

### Cambiar Fuente
Edita `index.html` y agrega tu fuente de Google Fonts.

---

## 📞 ¿Necesitas Ayuda?

1. Revisa `CARTA_PARA_AXEL.md` - Está todo explicado
2. Lee `COMANDOS.md` - Comandos útiles
3. Consulta `PERSONALIZACION.md` - Guía de cambios

---

## ✅ Checklist Inicial

- [ ] Ejecutar `npm install`
- [ ] Ejecutar `npm run dev`
- [ ] Abrir en navegador
- [ ] Probar login
- [ ] Explorar menú
- [ ] Ver modo oscuro
- [ ] Leer documentación

---

<div align="center">

## 🎉 ¡Listo para Empezar!

**Tu app está increíble. ¡A disfrutarla!** ✨

</div>
