import { useState } from "react";
import Login from "./pages/login";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState(null);

  const handleLogin = (datosUsuario) => {
    setUsuario(datosUsuario);
  };

  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <div className="app">
      {usuario ? (
        <Home usuario={usuario} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
