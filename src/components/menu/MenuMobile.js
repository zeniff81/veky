import React, { useEffect, useState } from "react";
import logo from "../../assets/img/menu-logo.png";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import agent from "../../assets/img/agent.svg";
import MenusItems from "./MenusItems";
import { useAuth } from "../../auth/Auth";

function MenuMobile() {
  const { currentName, currentRole } = useAuth();
  const [showAdminItems, setShowAdminItems] = useState(false);

  useEffect(() => {
    setShowAdminItems(currentRole.includes("admin"));
  }, [currentRole]);

  return (
    <div>
      <p className='menumobile-protected-space'></p>
      <nav className='menumobile'>
        {/* logo */}
        <Link to='/' className='logo'>
          <img src={logo} alt='menu logo' />
        </Link>
        {/* center icons */}
        <ul className='menumobile-icons icons-center'>
          <MenusItems />
        </ul>
        {/* right icons */}
        <div className='menumobile-icons icons-right'>
          <Link to='/contactus' className='contact'>
            <div className='menumobile-icons-item'>
              <div>Contáctenos</div>
              <img src={agent} alt='logo contactenos' />
            </div>
          </Link>
          <Link to='/products'>
            <div className='menumobile-icons-item'>
              <div>Productos</div>
            </div>
          </Link>
        </div>
        <Link to='#' className='currentUser'>
          <div className='menumobile-icons-item'>
            <div>
              [ {currentName}
              {showAdminItems ? " (admin)" : null} ]
            </div>
          </div>
        </Link>
        {/* burger */}
        <Burger theme='light' />
      </nav>
    </div>
  );
}

export default MenuMobile;
