import React from "react";
import icon from "../../assets/img/cart-white.svg";

function CatalogItem({ productInfo }) {
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
        <div className='info'>
          <div className='title'>{productInfo.title}</div>
          <div className='weight'>{productInfo.weight}oz</div>
          <div className='description'>{productInfo.description}</div>
        </div>
        <div className='price'>${productInfo.price}</div>
        <div className='btn btn-add-cart'>
          <div className='caption'>añadir</div>
          <img src={icon} alt='cart icon' className='cart-icon' />
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
