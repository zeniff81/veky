import React from "react";
import logo2 from "../../assets/img/tiempo2.svg";
import Product from "../../components/product/Product";
import BannerCarrouselMobile from "./BannerCarrousel/BannerCarrouselMobile";

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
    </div>
  );
}

export default Home;
