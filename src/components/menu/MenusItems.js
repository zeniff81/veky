import React from "react";
import { v4 as uuidv4 } from "uuid";
const { Link } = require("react-router-dom");

const routes = [
  { caption: "Inicio", route: "/" },
  { caption: "Productos", route: "/products" },
  { caption: "Contáctenos", route: "/contact" },
  { caption: "Nosotros", route: "/about" },
  { caption: "Admin", route: "/admin" }
];

const items = [];

routes.map(item => {
  const i = (
    <li key={uuidv4()}>
      <Link to={item.route}>{item.caption}</Link>
    </li>
  );
  items.push(i);
  return "";
});

export default items;
