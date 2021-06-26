import React, { useState } from "react";
import flipIcon from "../../assets/img/flip.svg";
import CatalogItem from "./CatalogItem";
import CatalogItemBack from "./CatalogItemBack";

const CardFlipper = props => {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`cardflipper`}>
      <div className={`card-container ${flipped ? "flipped" : ""}`}>
        <div className='card'>
          {/* back */}
          <figure className='back' onClick={flip}>
            {
              <CatalogItemBack
                className={`${flipped ? "back-visible" : ""}`}
                {...props}
              />
            }
          </figure>

          {/* front */}
          <figure className={`front ${flipped ? "hidden" : ""}`}>
            <img src={flipIcon} alt='' onClick={flip} className='flipper' />
            {<CatalogItem {...props} />}
          </figure>
        </div>
      </div>
    </div>
  );
};

export default CardFlipper;
