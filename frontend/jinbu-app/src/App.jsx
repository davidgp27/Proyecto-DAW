import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LoginPage } from './components/Pages/LoginPage';
import { HomePage } from './components/Pages/HomePage';
import { ProfilePage } from './components/Pages/ProfilePage';
import { PhotoDetailPage } from './components/Pages/PhotoDetailPage';
import './styles/index.css';

function App() {
  // Verificar si el usuario está logueado
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Login - siempre accesible */}
          <Route path="/login" element={<LoginPage />} />

          {/* Rutas protegidas */}
          <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />} />
          <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" replace />} />
          <Route path="/photo/:id" element={isLoggedIn ? <PhotoDetailPage /> : <Navigate to="/login" replace />} />

          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
