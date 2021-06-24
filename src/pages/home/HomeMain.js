import React, { useEffect, useState } from "react";
import logoTiempo1 from "../../assets/img/tiempo1.svg";
import logoTiempo2 from "../../assets/img/tiempo2.svg";
import Product from "../../components/product/Product";
import BannerCarrouselMobile from "./BannerCarrousel/BannerCarrouselMobile";
import whatsappIcon from "../../assets/img/whatsapp.svg";
import phoneIcon from "../../assets/img/phone.svg";
import { useMediaQuery } from "../../utilities/useMediaQuery";
import axios from "axios";
import { SERVER_URL } from "../../environments.js";

function Home() {
  let pageWidth768 = useMediaQuery("(min-width: 768px)");

  return (
    <div className='homemain'>
      <BannerCarrouselMobile />

      {/* stripe */}
      <div className='stripe-logo'>
        <div className='stripe stripe1'></div>
        <div className='logoTiempo'>
          <img src={pageWidth768 ? logoTiempo1 : logoTiempo2} alt='' />
        </div>
        <div className='stripe stripe2'></div>
      </div>
      {/* stripe */}

      <GenerateProducts />

      <div className='contact-number'>
        <h3>Contáctenos</h3>
        <h2> 809-983-7518</h2>
        <img src={phoneIcon} alt='ícono de teléfono ' />
        <img src={whatsappIcon} alt='ícono de whatsapp ' />
      </div>
    </div>
  );
}

const GenerateProducts = () => {
  const [product1, setProduct1] = useState({});
  const [product2, setProduct2] = useState({});
  const [product3, setProduct3] = useState({});

  let screenMin1024 = useMediaQuery("(min-width: 1024px)");
  let screenMin1440 = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    const fetchPromoProducts = async () => {
      const promoProducts = await axios.get(
        `${SERVER_URL}/products/homepromoproducts`
      );
      setProduct1(promoProducts.data.product1[0]);
      setProduct2(promoProducts.data.product2[0]);
      setProduct3(promoProducts.data.product3[0]);

      console.log(promoProducts.data.product1[0]);
      console.log(promoProducts.data.product2[0]);
      console.log(promoProducts.data.product3[0]);
    };

    fetchPromoProducts();
  }, []);

  return (
    <div className='homePromoProducts'>
      <Product info={product1} />
      {screenMin1024 && <Product info={product2} />}
      {screenMin1440 && <Product info={product3} />}
    </div>
  );
};

export default Home;
