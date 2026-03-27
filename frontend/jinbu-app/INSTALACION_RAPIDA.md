# 🚀 GUÍA RÁPIDA DE INSTALACIÓN - JINBU REACT APP

## ⚡ Pasos Rápidos (5 minutos)

### 1. Preparar Node.js
```bash
# Verificar que tengas Node.js instalado
node --version  # debe ser v16 o superior
npm --version
```

Si no lo tienes, descárgalo aquí: https://nodejs.org/

### 2. Instalar el Proyecto
```bash
# Ve a la carpeta del proyecto
cd jinbu-app

# Instala las dependencias
npm install
```

### 3. Ejecutar en desarrollo
```bash
# Inicia el servidor
npm run dev
```

Se abrirá automáticamente en `http://localhost:3000`

### 4. Hacer Login
```
Email: cualquiera@ejemplo.com
Contraseña: cualquier cosa
```

¡Listo! Ya estás dentro 🎉

---

## 📝 Credenciales de Prueba

Puedes usar cualquier email/contraseña. Aquí hay algunos ejemplos:

```
Email: test@jinbu.com
Contraseña: password123

Email: artist@gallery.com
Contraseña: mypassword

Email: photographer@example.com
Contraseña: 12345678
```

---

## 🔑 Funcionalidades para Probar

### En la HomePage
- Haz scroll por las fotos
- Hoverea una foto para ver opciones
- Clica el corazón para "like"
- Clica el bookmark para guardar
- Usa la barra lateral para filtrar por categoría (desktop)
- Clica una foto para ver detalles

### En el Profile
- Clica en los tabs: Portfolio, Galleries, Gear, About
- Clica "Follow" para seguir al fotógrafo
- Ver estadísticas de followers

### En Photo Detail
- Ve información técnica (EXIF)
- Agrega comentarios
- Like la foto
- Bookmark la foto
- Sigue al fotógrafo

### En el Header
- Usa el toggle dark/light mode (icono de sol/luna)
- Buscador (interfaz)

---

## 🛑 Solucionar Problemas

### Error: "port 3000 already in use"
```bash
# Usa otro puerto
npm run dev -- --port 3001
```

### Error: "Cannot find module"
```bash
# Limpia y reinstala
rm -rf node_modules package-lock.json
npm install
```

### La app no se recarga
```bash
# Limpia la caché del navegador
# Ctrl+Shift+Delete (o Cmd+Shift+Delete en Mac)
```

---

## 📦 Build para Producción

```bash
# Crear versión optimizada
npm run build

# Preview de la build
npm run preview
```

---

## 🎨 Personalizar Colores

Edita `tailwind.config.js` para cambiar los colores:

```javascript
colors: {
  "primary": "#98cbff",  // Azul claro
  "background": "#0e0e0e",  // Fondo negro
  // ... más colores
}
```

---

## 📁 Estructura de Carpetas (Importante)

```
jinbu-app/
├── src/
│   ├── components/       👈 Componentes reutilizables
│   ├── context/          👈 Estado global (theme)
│   ├── data/             👈 Datos mock (edita aquí para cambiar fotos)
│   ├── styles/           👈 CSS global
│   ├── App.jsx           👈 Componente principal
│   └── main.jsx          👈 Punto de entrada
├── index.html            👈 HTML principal
├── package.json          👈 Dependencias
└── tailwind.config.js    👈 Configuración de Tailwind
```

---

## ✏️ Cambiar Datos

Para usar tus propias fotos, edita `src/data/mockData.js`:

```javascript
export const mockPhotos = [
  {
    id: 1,
    src: "URL_DE_TU_FOTO",  // Cambia aquí
    title: "Tu Título",
    artist: "Tu Nombre",
    // ... más propiedades
  },
  // ...
];
```

---

## 🔐 Autenticación Básica

La app usa localStorage (NO es seguro para producción).

Para cerrar sesión:
1. Abre DevTools (F12)
2. Consola
3. Escribe: `localStorage.clear()`
4. Refresca la página

---

## 📱 Responsive Design

La app funciona en:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1280px+)

Prueba redimensionando el navegador o usando DevTools.

---

## 🎯 Próximas Mejoras

Cosas que puedes agregar fácilmente:

1. **Conectar a una API real**
   - Reemplaza mockData con fetch API
   - Usa async/await

2. **Agregar más categorías**
   - Edita `mockData.js`
   - Agrega más items al array

3. **Upload real de fotos**
   - Usa una librería como `react-dropzone`
   - Envía a un servidor

4. **Search funcional**
   - Implementa búsqueda en HomePage
   - Filtra por título o artista

---

## 🆘 Necesitas Ayuda?

1. Revisa la consola del navegador (F12) para errores
2. Lee los comentarios en los archivos `.jsx`
3. Consulta la documentación:
   - React: https://react.dev
   - Tailwind: https://tailwindcss.com
   - React Router: https://reactrouter.com

---

## ✨ ¡Listo!

Ahora tienes una app funcional. ¡Diviértete personalizándola! 🎨

¿Preguntas? Los componentes están bien organizados y documentados.
