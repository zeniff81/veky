import { SERVER_URL } from "../../environments.js";
import { useMediaQuery } from "../../utilities/useMediaQuery";
import axios from "axios";
import BannerCarrouselMobile from "./BannerCarrousel/BannerCarrouselMobile";
import CardFlipper from "../../components/product/CardFlipper";
import CatalogItem from "../../components/product/CatalogItem";
import logoTiempo1 from "../../assets/img/tiempo1.svg";
import logoTiempo2 from "../../assets/img/tiempo2.svg";
import phoneIcon from "../../assets/img/phone.svg";
import React, { useEffect, useState } from "react";
import whatsappIcon from "../../assets/img/whatsapp.svg";

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
  const [arrayProducts, setArrayProducts] = useState([]);

  useEffect(() => {
    async function fetchPromoProducts() {
      const results = await axios.get(
        `${SERVER_URL}/products/homepromoproducts`
      );
      setArrayProducts(results.data.arrProducts);
    }

    fetchPromoProducts();
  }, []);

  return (
    <div className='homePromoProducts'>
      {arrayProducts.map(
        el => (
          <CardFlipper
            key={el._id}
            Front={CatalogItem}
            Back={CatalogItem}
            productInfo={el}
          />
        )
        //<CatalogItem productInfo={el} />
      )}
    </div>
  );
};

export default Home;
