import React, { useState } from "react";
import dummy from "../../assets/img/dummy.png";

function Product({ info }) {
  const placeOrder = () => {
    alert(
      "\n\n¡Pronto tendremos carrito de compras en línea! \n\nPor ahora, llámanos o escríbenos por WhatsApp al 809-983-7518."
    );
  };
  return (
    <div className={"product"}>
      <img className='product-image' src={dummy} alt='product' />
      <div className='product-details'>
        <div className='product-title'>{info.title}</div>
        <div className='product-price'>${info.price}</div>
        <div className='btn btn-primary' onClick={placeOrder}>
          ordenar
        </div>
      </div>
    </div>
  );
}

export default Product;
