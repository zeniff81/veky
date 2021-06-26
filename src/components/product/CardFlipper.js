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
      <img src={flipIcon} alt='' onClick={flip} className='flipper' />

      <div className={`card-container ${flipped ? "flipped" : ""}`}>
        <div className='card'>
          <figure className='back'>{<CatalogItemBack {...props} />}</figure>
          <figure className={`front ${flipped ? "hidden" : ""}`}>
            {<CatalogItem {...props} />}
          </figure>
        </div>
      </div>
    </div>
  );
};

const DummyCard = ({ text }) => {
  return (
    <div className='dummybackcard'>
      <h1>Dummy card</h1>
      <p>{text}</p>
    </div>
  );
};

export default CardFlipper;
