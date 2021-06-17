import React, { useState, useEffect, useRef } from "react";
import items from "./MenusItems";

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function Burger({ theme }) {
  const [active, setActive] = useState(false);
  const [activeClass, setActiveClass] = useState("");
  const [color, setColor] = useState("#484848");
  const burgerRef = useRef(null);
  useOutsideAlerter(burgerRef);

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

  return (
    <div className='burger' ref={burgerRef} onClick={toggleMenu}>
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

export default Burger;
