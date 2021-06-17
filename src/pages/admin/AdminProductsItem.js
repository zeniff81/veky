import React from "react";
import deleteIcon from "../../assets/img/delete-icon.svg";
import editIcon from "../../assets/img/edit-icon.svg";

function AdminProductsItem({ info, deleteMe }) {
  return (
    <div className='adminproductsitem'>
      <div className='index'>
        {info.title.substring(0, 2) + info._id.substring(10, 12)}
      </div>
      <div className='title'>{info.title}</div>
      <div className='weight'>{info.weight}OZ</div>
      <div className='price'>${info.price}</div>
      <img src={info.image} height='100' width='86px' alt='imagen producto' />
      {/* options */}
      <div className='options'>
        <div className='option-item'>
          <img src={editIcon} alt='editar' />
        </div>
        <div className='option-item'>
          <img
            src={deleteIcon}
            alt='borrar'
            id={info._id}
            onClick={() => deleteMe(info._id)}
          />
        </div>
      </div>
      {/* options */}
    </div>
  );
}

export default AdminProductsItem;
