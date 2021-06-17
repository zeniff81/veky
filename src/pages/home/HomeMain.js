import React from "react";
import phone from "../../assets/img/phone.svg";
import woman from "../../assets/img/woman-bg.png";
import logo1 from "../../assets/img/logo1.png";
import logo2 from "../../assets/img/tiempo2.svg";
import heart from "../../assets/img/heart.svg";
import Product from "../../components/product/Product";

function Home() {
  return (
    <div className='homemain'>
      {/* woman */}
      <img src={woman} alt='' className='woman' />

      {/* logo1 */}
      <img src={logo1} alt='logo1' className='logo1' />

      {/* heart */}
      <div className='heart-container'>
        <img src={heart} alt='heart' className='animate-heart heart' />
      </div>

      {/* stripe */}
      <div className='stripe-logo'>
        <div className='stripe stripe1'></div>
        <div className='logo2'>
          <img src={logo2} alt='' />
        </div>
        <div className='stripe stripe2'></div>
      </div>
      {/* stripe */}

      <div className='home-bottom'>
        <div className='products'>
          <Product />
        </div>
        <div className='phone'>
          <img src={phone} alt='' />
          <div className='text'>809-654-5496</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
