import React from "react";
import logo from "../../assets/img/menu-logo.png";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import agent from "../../assets/img/agent.svg";
import items from "./MenusItems";

function MenuMobile() {
  return (
    <div>
      <p className='menumobile-protected-space'></p>
      <nav className='menumobile'>
        {/* logo */}
        <Link to='/' className='logo'>
          <img src={logo} alt='menu logo' />
        </Link>
        {/* center icons */}
        <ul className='menumobile-icons icons-center'>{items.map(el => el)}</ul>
        {/* right icons */}
        <div className='menumobile-icons'>
          <Link to='/contact'>
            <div className='menumobile-icons-item'>
              <div>Contáctenos</div>
              <img src={agent} alt='logo contactenos' />{" "}
            </div>
          </Link>
          <Link to='/products'>
            <div className='menumobile-icons-item'>
              <div>Productos</div>
            </div>
          </Link>
        </div>
        {/* burger */}
        <Burger theme='light' />
      </nav>
    </div>
  );
}

export default MenuMobile;
