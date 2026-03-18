# 🔧 SOLUCIÓN - Pantalla Negra / Conexión Rechazada

## ✅ PASOS PARA EJECUTAR LA APP

### Método 1: Doble Click (Más Fácil)

1. **Ve a la carpeta del proyecto:**
   ```
   C:\Users\DELL\Documents\26.S1.DSOFT-3006.VR.A.3756
   ```

2. **Doble click en:** `iniciar.bat`

3. **Espera a que diga:** `Local: http://localhost:5173/`

4. **Abre tu navegador** y ve a: `http://localhost:5173`

---

### Método 2: Terminal Manual

1. **Abre PowerShell o CMD**

2. **Escribe:**
   ```bash
   cd "C:\Users\DELL\Documents\26.S1.DSOFT-3006.VR.A.3756"
   ```

3. **Ejecuta:**
   ```bash
   npm run dev
   ```

4. **Espera este mensaje:**
   ```
   VITE v7.3.1  ready in XXX ms
   ➜  Local:   http://localhost:5173/
   ```

5. **NO CIERRES esa ventana**

6. **Abre tu navegador** en: `http://localhost:5173`

---

## 🐛 Si Todavía No Funciona

### Error: ERR_CONNECTION_REFUSED

**Solución:**
1. Cierra TODAS las ventanas de CMD/PowerShell
2. Ejecuta en CMD:
   ```bash
   taskkill /F /IM node.exe
   ```
3. Vuelve a ejecutar `npm run dev`

---

### Error: Puerto en Uso

**Solución:**
```bash
npx kill-port 5173
npm run dev
```

---

### Error: Pantalla Blanca/Negra

**Abre la consola del navegador (F12)** y busca errores rojos.

Los errores comunes son:
- `Failed to compile` - Hay error en el código
- `Cannot find module` - Falta instalar dependencias
- `IonIcon is not defined` - Problema con Ionic

**Si ves errores**, mándame una captura de la consola (F12).

---

## ✅ Lo Que Deberías Ver

### Al cargar:
1. ✨ Splash screen con logo de Riksiri
2. 🎨 Fondo gradiente animado (índigo → violeta → cian)
3. ⏳ Spinner de "Cargando experiencia..."

### Después de 1.5 segundos:
1. 🔐 Login con fondo gradiente animado
2. 📱 Formulario con iconos
3. 🎨 Botón "Ingresar" con gradiente

---

## 🎯 Verificación Rápida

Ejecuta esto en la terminal:

```bash
cd "C:\Users\DELL\Documents\26.S1.DSOFT-3006.VR.A.3756"
npm run dev
```

**¿Qué dice?**

- ✅ `Local: http://localhost:5173/` - ¡Todo bien!
- ❌ `Error: Something already running on port 5173` - Ejecuta `npx kill-port 5173`
- ❌ `Cannot find module` - Ejecuta `npm install`
- ❌ `Failed to compile` - Hay error en el código, revisa la consola

---

## 📞 ¿Necesitas Ayuda?

Dime exactamente:
1. ¿Qué comando ejecutaste?
2. ¿Qué mensaje de error salió?
3. ¿Qué ves en el navegador? (o si no carga)
4. ¿Qué dice la consola? (F12)

---

## 🚀 Comando Mágico (Reiniciar Todo)

```bash
# Matar todos los procesos de Node
taskkill /F /IM node.exe

# Ir al proyecto
cd "C:\Users\DELL\Documents\26.S1.DSOFT-3006.VR.A.3756"

# Instalar (por si acaso)
npm install

# Iniciar
npm run dev
```

---

<div align="center">

## ¡Tu App Está Lista! Solo Falta Encenderla 🔥

</div>
