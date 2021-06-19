import React from "react";
import logo2 from "../../assets/img/tiempo2.svg";
import Product from "../../components/product/Product";
import BannerCarrouselMobile from "./BannerCarrousel/BannerCarrouselMobile";
import whatsappIcon from "../../assets/img/whatsapp.svg";
import phoneIcon from "../../assets/img/phone.svg";

function Home() {
  return (
    <div className='homemain'>
      <BannerCarrouselMobile />

      {/* stripe */}
      <div className='stripe-logo'>
        <div className='stripe stripe1'></div>
        <div className='logo2'>
          <img src={logo2} alt='' />
        </div>
        <div className='stripe stripe2'></div>
      </div>
      {/* stripe */}

      <Product />

      <div className='contact-number'>
        <h3>Contáctenos</h3>
        <h2> 809-983-7518</h2>
        <img src={phoneIcon} alt='ícono de teléfono ' />
        <img src={whatsappIcon} alt='ícono de whatsapp ' />
      </div>
    </div>
  );
}

export default Home;
