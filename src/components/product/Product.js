import React from "react";
import dummy from "../../assets/img/dummy.png";

function Product(props) {
  const placeOrder = () => {
    alert(
      "\n\n¡Pronto tendremos carrito de compras en línea! \n\nPor ahora, llámanos o escríbenos por WhatsApp al 849-751-7666."
    );
  };
  return (
    <div className={"product " + props.className}>
      <img className='product-image' src={dummy} alt='product' />
      <div className='product-details'>
        <div className='product-description'>Línea Veky 7 pasos mediana</div>
        <div className='product-price'>$2,945</div>
        <div className='btn btn-primary' onClick={placeOrder}>
          ordenar
        </div>
      </div>
    </div>
  );
}

export default Product;
