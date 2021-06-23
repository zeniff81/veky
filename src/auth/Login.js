import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useAuth } from "./Auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setCurrentName, setCurrentUsername, setCurrentRole } = useAuth();

  const submitLogin = async e => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/users/login", {
      username,
      password
    });

    setCurrentName(response.data.data.name);
    setCurrentUsername(response.data.data.username);
    setCurrentRole(response.data.data.role);

    // redirect ?
    if (response.data.response === "LOGIN SUCCESS") setRedirect(true);
  };

  return redirect ? (
    <Redirect to='/' />
  ) : (
    <div className='login'>
      <h1>Iniciar sesión</h1>

      <form>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value.toLowerCase())}
          placeholder='Nomdre de usuario'
        />
        <input
          type='text'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Contraseña'
        />
        <button onClick={submitLogin}>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
