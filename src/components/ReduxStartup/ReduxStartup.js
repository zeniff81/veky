import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCart } from "../../redux";
import { whoAmI } from "../../redux/user/userActions";
import { loadUser } from "./loadUser";

function ReduxStartup({ cart, user, whoAmI, fetchCart }) {
  // loadUser
  useEffect(() => {
    loadUser(whoAmI, fetchCart);
  }, []);

  // if new user... fetch cart
  useEffect(() => {
    //fetchCart(user._id);
  }, []);

  return <div className='reduxstartup'></div>;
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer,
    user: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: id_to_find => dispatch(fetchCart(id_to_find)),
    whoAmI: id_to_find => dispatch(whoAmI(id_to_find))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxStartup);
