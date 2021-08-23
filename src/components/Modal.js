import React, { useState } from "react";
import reactDom from "react-dom";
import { useSpring, animated, config } from "react-spring";
import tick from "../assets/img/tick.svg";

function Modal({ children, title, isOpen, setIsOpen }) {
  const [show, setShow] = useState(true);

  const props = useSpring({
    from: { opacity: 0, transform: "translate(-50%, -5%)" },
    to: { opacity: 1, transform: "translate(-50%, -50%)" },
    reverse: !show,
    config: config.wobbly
  });

  const close = () => {
    setShow(false);

    setTimeout(() => {
      setIsOpen(false);
      setShow(true);
    }, 300);
  };

  return reactDom.createPortal(
    <div className={`modal-overlay`}>
      <animated.div style={props} className={`modal`}>
        <div className={`modal-container `}>
          <div className='header'>
            <img src={tick} alt='cotejo' />
          </div>

          <div className='title'>{title}</div>
          <div className='message'>{children}</div>
          <div className='buttons'>
            <button className='btn-close' onClick={close}>
              Cerrar
            </button>
          </div>
        </div>
      </animated.div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
