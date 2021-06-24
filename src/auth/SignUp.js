import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../environments.js";

function SignUp() {
  const [name, setName] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const submitSignUp = async e => {
    e.preventDefault();
    const submit = await axios.post(`${SERVER_URL}users/signup`, {
      name,
      usernameReg,
      passwordReg
    });
    console.log(submit);
  };

  return (
    <div className='login'>
      <h1>Registrarse</h1>

      <form>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value.toLowerCase())}
          placeholder='Nombre'
        />
        <input
          type='text'
          value={usernameReg}
          onChange={e => setUsernameReg(e.target.value)}
          placeholder='Nomdre de usuario'
        />
        <input
          type='text'
          value={passwordReg}
          onChange={e => setPasswordReg(e.target.value)}
          placeholder='Contraseña'
        />
        <button onClick={submitSignUp}>Entrar</button>

        <div className='divider'></div>

        <h3>
          ¿Ya tienes cuenta? <Link to='login'>Iniciar sesión</Link>
        </h3>
      </form>
    </div>
  );
}

export default SignUp;
