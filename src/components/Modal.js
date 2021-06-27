import React, { useEffect, useState } from "react";
import reactDom from "react-dom";

function Modal({ children, title, isOpen, setIsOpen }) {
  const [hidden, setHidden] = useState("");

  const close = () => {
    setHidden("hidden");

    setTimeout(() => {
      setHidden("");
      setIsOpen(null);
    }, 400);
  };

  if (!isOpen) return null;

  return reactDom.createPortal(
    <div
      className={`modal-overlay`}
      style={{
        background: hidden
          ? "rgba(134, 202, 245, 0)"
          : "rgba(134, 202, 245, 0.6)"
      }}
    >
      <div className={`modal ${hidden}`}>
        <div className={`modal-container `}>
          <div className='header'>
            <div>!</div>
          </div>

          <div className='title'>{title}</div>
          <div className='message'>{children}</div>
          <div className='buttons'>
            <button className='btn-close' onClick={close}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
