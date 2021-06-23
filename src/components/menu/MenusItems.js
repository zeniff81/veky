import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../../auth/Auth";
const { Link } = require("react-router-dom");

function MenusItems() {
  const { currentRole } = useAuth();

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

  return (
    <>
      {items.map(item => {
        return (
          <li key={uuidv4()}>
            <Link to={item.route}>{item.caption}</Link>
          </li>
        );
      })}
    </>
  );
}

export default MenusItems;
