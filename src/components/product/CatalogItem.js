import React from "react";
import icon from "../../assets/img/cart-white.svg";

function CatalogItem({ productInfo }) {
  const placeOrder = () => {
    alert(
      "\n\n¡Pronto tendremos carrito de compras en línea! \n\nPor ahora, llámanos o escríbenos por WhatsApp al 809-983-7518."
    );
  };

  return (
    <div className='catalogitem'>
      <div></div>
      {/* image */}
      <img src={productInfo.image} alt='' className='image' />

      {/* item index */}
      <div className='index'>
        {productInfo.title.substring(0, 2) + productInfo._id.substring(20, 24)}
      </div>

      {/* details */}
      <div className='details'>
        {/* info */}
        <div className='info'>
          <div className='info-title'>
            <div className='title'>{productInfo.title}</div>
          </div>
          <div className='info-weight'>
            <div className='weight'>{productInfo.weight}oz</div>
          </div>
          <div className='info-description'>
            <div className='description'>{productInfo.description}</div>
          </div>
        </div>
        {/* info */}

        <div className='price'>${productInfo.price}</div>
        <div className='btn btn-add-cart' onClick={placeOrder}>
          <div className='caption'>Ordenar</div>
          <img src={icon} alt='cart icon' className='cart-icon' />
        </div>
      </div>
    </div>
  );
}

//export default CatalogItem;
export default CatalogItem;
