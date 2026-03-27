# Jinbu Digital Gallery - React App

Una galería digital moderna construida con React, Tailwind CSS y React Router. Completa con autenticación, tema oscuro/claro, y funcionalidades interactivas.

## 🎨 Características

- ✅ **4 Páginas Principales**
  - Login/SignUp con validación
  - Homepage con masonry grid de fotos
  - Perfil con tabs de portfolio, galerías y equipamiento
  - Detalle de foto con comentarios

- ✅ **Funcionalidades**
  - Autenticación básica (localStorage)
  - Dark/Light mode toggle
  - Like y bookmark de fotos
  - Agregar comentarios
  - Filtrado por categoría
  - Sistema de seguimiento (follow/unfollow)
  - Validación de formularios
  - Estados de loading

- ✅ **Diseño**
  - Totalmente responsive
  - Dark mode por defecto
  - Animaciones suaves
  - Componentes reutilizables
  - Tailwind CSS customizado

## 📋 Requisitos

- Node.js 16+ 
- npm o yarn

## 🚀 Instalación

### 1. Instalar dependencias
```bash
cd jinbu-app
npm install
```

### 2. Ejecutar servidor de desarrollo
```bash
npm run dev
```

La app se abrirá en `http://localhost:3000`

### 3. Build para producción
```bash
npm run build
```

## 📁 Estructura del Proyecto

```
jinbu-app/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   │   ├── TopNav.jsx
│   │   │   ├── SideNav.jsx
│   │   │   └── BottomNav.jsx
│   │   ├── Cards/
│   │   │   ├── PhotoCard.jsx
│   │   │   └── CommentCard.jsx
│   │   ├── Layout/
│   │   │   └── Footer.jsx
│   │   └── Pages/
│   │       ├── LoginPage.jsx
│   │       ├── HomePage.jsx
│   │       ├── ProfilePage.jsx
│   │       └── PhotoDetailPage.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🔐 Autenticación

La app usa localStorage para simular autenticación:

**Para acceder:**
1. Ve a la página de login
2. Ingresa cualquier email y contraseña
3. Se guardará en localStorage

**Para cerrar sesión:**
```javascript
localStorage.removeItem('user');
```

## 🎨 Temas y Colores

El proyecto incluye colores customizados en `tailwind.config.js`:

- **Primary**: #98cbff (Azul claro)
- **Primary Container**: #004a77 (Azul oscuro)
- **Background**: #0e0e0e (Negro profundo)
- **Surface**: #0e0e0e
- **On Surface**: #e7e5e5 (Texto claro)

### Toggle Dark/Light Mode

El toggle está en la TopNav. La preferencia se guarda en localStorage.

## 📝 Datos Mock

Todos los datos están en `src/data/mockData.js`:

- `mockPhotos` - Array de 6 fotos con información EXIF
- `mockUserProfile` - Perfil del usuario
- `mockComments` - Comentarios de ejemplo
- `mockCategories` - Categorías de fotos
- `mockGear` - Equipamiento fotográfico

Puedes reemplazar estos con datos reales conectando a una API.

## 🔄 Estado Global

Se usa React Context para tema (dark/light) y localStorage para:
- Usuario logueado
- Fotos liked
- Fotos bookmarked

## 📱 Responsivo

La app es fully responsive:
- **Mobile**: Usa BottomNav en lugar de Sidebar
- **Tablet**: SideNav y diseño adaptado
- **Desktop**: Layout completo con todas las características

## 🛠️ Funcionalidades Principales

### LoginPage
- Tab switcher entre Sign In y Sign Up
- Validación de formularios
- Password toggle
- Loading state en botón
- Social login buttons (UI)

### HomePage
- Masonry grid con 3 columnas
- Filtrado por categoría
- Like/Bookmark de fotos
- Hover overlay con información
- "Load More" button

### ProfilePage
- 4 tabs: Portfolio, Galleries, Gear, About
- Grid con imágenes responsive
- Botón Follow/Unfollow
- Estadísticas (followers, following, shots)
- Sección de equipamiento

### PhotoDetailPage
- Foto grande con botón fullscreen
- Información EXIF
- Sección de comentarios
- Agregar comentarios
- Like, bookmark y share
- Follow fotógrafo
- Download button

## 🔄 Próximos Pasos

Para llevar esta app a producción:

1. **Conectar Backend**
   - Reemplazar mockData con API calls
   - Implementar autenticación real
   - Guardar datos en servidor

2. **Mejorar Funcionalidades**
   - Upload real de fotos
   - Búsqueda avanzada
   - Galerías personalizadas
   - Notificaciones

3. **Optimizaciones**
   - Lazy loading de imágenes
   - Code splitting
   - Caché de datos
   - PWA capabilities

## 📦 Dependencias Principales

- **react** ^18.2.0 - Framework principal
- **react-router-dom** ^6.20.0 - Routing
- **tailwindcss** ^3.3.6 - Styling

Sin otras dependencias externas. Todo hecho con CSS y JavaScript vanilla.

## 🎯 Notas Importantes

- El login es básico (localStorage) - no es seguro para producción
- Las imágenes son URLs externas - considera usar tus propias imágenes
- Los comentarios se guardan en el componente (se pierden al recargar)
- El like/bookmark se guarda en localStorage (persiste entre sesiones)

## 📞 Soporte

Si necesitas modificar o agregar funcionalidades, los componentes están bien organizados y comentados para fácil edición.

## 📄 Licencia

Este proyecto es código abierto y disponible bajo MIT License.

---

¡Disfruta tu galería digital! 🎨✨
