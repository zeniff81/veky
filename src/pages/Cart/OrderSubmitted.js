import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

function OrderSubmitted() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className='ordersubmitted'>
      <div className='afterOrderSubmitted'>
        <Link to='/products' className='btn btn-more-products'>
          Seguir viendo productos
        </Link>
        <Link to='/' className='btn btn-home'>
          Ir a la página principal
        </Link>
      </div>

      {/* modals */}
      {openModal && (
        <Modal title='¡Excelente!' isOpen={openModal} setIsOpen={setOpenModal}>
          <h3>Le contactaremos en breve. </h3>
          <p>
            También, si gusta puede llamarnos o escribirnos por{" "}
            <b>
              <i style={{ color: "green" }}>WhatsApp</i>
            </b>{" "}
            al <b style={{ color: "red" }}>809-983-7518</b>.
          </p>
        </Modal>
      )}
    </div>
  );
}

export default OrderSubmitted;
