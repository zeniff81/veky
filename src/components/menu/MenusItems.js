import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../../auth/Auth";
const { Link } = require("react-router-dom");

function MenusItems() {
  const { currentRole, isLogged, logout } = useAuth();

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      { caption: "Inicio", route: "/" },
      { caption: "Productos", route: "/products" },
      { caption: "Contáctenos", route: "/contactus" },
      { caption: "Nosotros", route: "/about" }
    ]);

    if (currentRole.includes("admin")) {
      setItems(prev => [...prev, { caption: "Admin", route: "/admin" }]);
    }
  }, [currentRole]);

  const signOut = e => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      {items.map(item => {
        return (
          <li key={uuidv4()}>
            <Link to={item.route}>{item.caption}</Link>
          </li>
        );
      })}

      <hr />

      {isLogged && (
        <li>
          <a href='/' onClick={signOut}>
            Salir
          </a>
        </li>
      )}

      {!isLogged && (
        <li>
          <Link to='/login'>Iniciar sesión</Link>
        </li>
      )}
    </>
  );
}

export default MenusItems;
