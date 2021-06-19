import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import app from "../firebase/app";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login'>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <label>
          <div className='label'>Email</div>
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label>
          <div className='label'>Contraseña</div>
          <input name='password' type='password' placeholder='Contraseña' />
        </label>
        <button className='btn btn-primary' type='submit'>
          Entrar
        </button>
      </form>
      <Link className='registrarse' to='/signup'>
        Registrarse
      </Link>
    </div>
  );
};

export default withRouter(Login);
