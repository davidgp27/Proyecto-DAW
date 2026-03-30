import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!email || !password) {
      setError("Rellena todos los campos");
      return;
    }

    if (!email.includes("@") || !email.includes(".com")) {
      setError("El email no es válido");
      return;
    }

    if (password.length < 4) {
      setError("La contraseña es muy corta");
      return;
    }

    // Simulamos login (sin backend por ahora)
    setError("");
    const nombre = email.split("@")[0]; // sacamos un nombre del email
    onLogin({ nombre, email });
  };

  return (
    <div className="login-page">

      <div className="login-formulario">
        <div className="login-contenedor">
          <h1 className="login-logo">
            Jinbu
          </h1>
          <p className="login-subtitulo">
            La red social para fotógrafos
          </p>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label>Email</label>
              <input
                type="text"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="campo">
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-login">
              Iniciar sesión
            </button>
          </form>

          <p className="login-extra">
            ¿No tienes cuenta? <a href="#">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
