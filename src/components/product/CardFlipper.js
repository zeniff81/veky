import React, { useState } from "react";
import flipIcon from "../../assets/img/flip.svg";

const CardFlipper = ({ Front, Back, ...props }) => {
  const [flipped, setFlipped] = useState(true);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`cardflipper`}>
      <img src={flipIcon} alt='' onClick={flip} className='flipper' />

      <div className={`card-container ${flipped && "flipped"}`}>
        <div className='card'>
          <figure className='back'>
            <h1>PRICE: $300</h1>
            <button>Buy me</button>
          </figure>
          <figure className='front'>
            <h1>PRO TIER</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              rem!
            </p>
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
