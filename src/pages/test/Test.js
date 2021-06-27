import React, { useState } from "react";
import Modal from "../../components/Modal";

function Test() {
  const [isOpen, setIsOpen] = useState(true);

  const showModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='test'>
      <h1>TEST</h1>
      <hr />

      <button onClick={showModal}>Show modal</button>

      <Modal title='¡Excelente!' isOpen={isOpen} setIsOpen={setIsOpen}>
        Hemos recibido su mensaje. Le contestaremos a la mayor brevedad posible.
      </Modal>
    </div>
  );
}

export default Test;
