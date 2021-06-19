import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase/app";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className='login'>
      <h1>Registrarse</h1>
      <form onSubmit={handleSignUp}>
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
    </div>
  );
};

export default withRouter(SignUp);
