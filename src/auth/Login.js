import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "./Auth";
import { SERVER_URL } from "../environments.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setCurrentName, setCurrentUsername, setCurrentRole } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [animateError, setAnimateError] = useState("");
  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, [usernameRef]);

  const submitLogin = async e => {
    e.preventDefault();
    const response = await axios.post(`${SERVER_URL}/users/login`, {
      username,
      password
    });

    if (response.data.success) {
      setCurrentName(response.data.data.name);
      setCurrentUsername(response.data.data.username);
      setCurrentRole(response.data.data.role);
      setRedirect(true);
    }

    if (!response.data.sucess) {
      setErrorMessage(
        "El usuario o la contraseña está mal. Por favor, revisar y tratar de nuevo."
      );
      setAnimateError("animateError");

      setTimeout(() => {
        setAnimateError("");
      }, 1000);
    }
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
          ref={usernameRef}
        />
        <input
          type='text'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Contraseña'
        />
        <button onClick={submitLogin}>Entrar</button>

        <div className={`errorMessage ${animateError}`}>{errorMessage}</div>
        <div className='divider'></div>

        <h3>
          ¿No tiene cuenta? <Link to='signup'>Registrarse</Link>
        </h3>
      </form>
    </div>
  );
}

export default Login;
