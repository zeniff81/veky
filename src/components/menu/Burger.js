import React, { useState, useEffect } from "react";
import onClickOutside from "react-onclickoutside";
import items from "./MenusItems";

function Burger({ theme }) {
  const [active, setActive] = useState(false);
  const [activeClass, setActiveClass] = useState("");
  const [color, setColor] = useState("#484848");

  useEffect(() => {
    if (theme === "dark") setColor("#484848");
    if (theme === "light") setColor("#E6E7E8");
  }, [theme]);

  useEffect(() => {
    active ? setActiveClass("burger-active") : setActiveClass("");
  }, [active]);

  const toggleMenu = e => {
    setActive(!active);
    active ? setActiveClass("") : setActiveClass("");
  };

  Burger.handleClickOutside = () => setActive("");

  return (
    <div className='burger' onClick={toggleMenu}>
      <div
        className={"line line1 " + activeClass}
        style={{
          background: color
        }}
      ></div>
      <div
        className={"line line2 " + activeClass}
        style={{
          background: color
        }}
      ></div>
      <div
        className={"line line3 " + activeClass}
        style={{
          background: color
        }}
      ></div>

      {/* options */}
      <ul className={`menuoptions ${active ? "menuoptions-visible" : ""}`}>
        {items.map(el => el)}
      </ul>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Burger.handleClickOutside
};

export default onClickOutside(Burger, clickOutsideConfig);
