import React from "react";
import dummy from "../../assets/img/dummy.png";

function Product(props) {
  return (
    <div className={"product " + props.className}>
      <img className='product-image' src={dummy} alt='product' />
      <div className='product-details'>
        <div className='product-description'>Línea 7 pasos</div>
        <div className='product-price'>$3000</div>
        <div className='btn btn-primary'>ordenar</div>
      </div>
    </div>
  );
}

export default Product;
