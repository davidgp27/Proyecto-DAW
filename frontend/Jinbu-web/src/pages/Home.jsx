import { useState } from "react";

// Datos fake para el feed (falata agregar para el feed)
const postsFake = [];

function Home({ usuario, onLogout }) {
  const [posts, setPosts] = useState(postsFake);

  // Sacar la inicial para el avatar
  const inicial = usuario.nombre.charAt(0).toUpperCase();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          Jinbu
        </div>

        <div className="navbar-centro">
          <button className="activo">Inicio</button>
          <button>Explorar</button>
          <button>Subir</button>
        </div>

        <div className="navbar-derecha">
          <div className="navbar-avatar">{inicial}</div>
          <button className="btn-logout" onLogonClick={out}>
            Salir
          </button>
        </div>
      </nav>
    </div>
    );
}

export default Home;