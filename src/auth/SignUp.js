import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const submitLogin = async e => {
    e.preventDefault();
    const submit = await axios.post("http://localhost:8080/users/signup", {
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
          onChange={e => setName(e.target.value)}
          placeholder='Nombre'
        />
        <input
          type='text'
          value={usernameReg}
          onChange={e => setUsernameReg(e.target.value)}
          placeholder='Nomdre de usuario'
        />
        <input
          type='password'
          value={passwordReg}
          onChange={e => setPasswordReg(e.target.value)}
          placeholder='Contraseña'
        />
        <button onClick={submitLogin}>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
