import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  loadScrollPosition,
  saveScrollPosition
} from "../../utilities/manageScrollPosition";
import { fetchCart, fetchUser } from "../../redux";
import { loadUser } from "../../components/ReduxStartup/loadUser";
import { whoAmI } from "../../redux/user/userActions";

function LoginScreen({ fetchUser, whoAmI, fetchCart, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadScrollPosition("login");
    return () => {
      saveScrollPosition("login");
    };
  }, []);

  const login = e => {
    e.preventDefault();

    fetchUser(
      {
        email,
        password
      },
      loadUser(whoAmI, fetchCart)
    );

    history.push("/");
  };

  return (
    <div className='login-screen auth-page'>
      <form onSubmit={login} className='login-screen__form'>
        <h3 className='login-screen__title'>Inicio de sesión</h3>
        {error && <span className='error-message'>{error}</span>}
        <div className='form-group'>
          <label htmlFor='email'>Email o usuario:</label>
          <input
            type='text'
            required
            id='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Contraseña: </label>
          <input
            type='password'
            required
            id='password'
            autoComplete='true'
            onChange={e => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
          <Link to='/forgotpassword' className='login-screen__forgotpassword'>
            ¿Olvidó su contraseña?
          </Link>
        </div>
        <button type='submit' className='btn btn-primary'>
          Iniciar
        </button>

        <span className='login-screen__subtext'>
          ¿No tiene una cuenta? <Link to='/register'>Registrarse</Link>
        </span>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: loginInfo => dispatch(fetchUser(loginInfo)),
    fetchCart: id_to_find => dispatch(fetchCart(id_to_find)),
    whoAmI: id_to_find => dispatch(whoAmI(id_to_find))
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
