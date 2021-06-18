import React, { useEffect, useState } from "react";
import gotero from "../../../assets/img/home pics/mobile/gotero.jpg";
import gotero2 from "../../../assets/img/home pics/mobile/gotero2.jpg";
import mascarilla from "../../../assets/img/home pics/mobile/mascarilla.jpg";
import prepoo from "../../../assets/img/home pics/mobile/prepoo.jpg";
import shampoo from "../../../assets/img/home pics/mobile/shampoo.jpg";
import logo_normal from "../../../assets/img/logo1.png";
import logo_black from "../../../assets/img/veky_logo_black.png";
import logo_white from "../../../assets/img/veky_logo_white.png";
import logo_white_border from "../../../assets/img/veky_logo_white_border.png";

function BannerCarrouselMobile() {
  const [images] = useState([gotero, gotero2, mascarilla, prepoo, shampoo]);
  const [logos] = useState([
    logo_black,
    logo_white_border,
    logo_white_border,
    logo_white,
    logo_white_border,
    logo_normal
  ]);

  const [index, setIndex] = useState(4);
  const [hideElements, setHideElements] = useState(false);

  useEffect(() => {
    const intv = 10000;

    const interval = setInterval(() => {
      setIndex(index => (index === images.length - 1 ? 0 : index + 1));

      setTimeout(() => {
        setHideElements(true);
      }, intv - 1000);

      setTimeout(() => {
        setHideElements(false);
      }, intv);
    }, intv);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='bannercarrouselmobile'>
      <img
        className={`img-background ${hideElements && "hideElements"}`}
        src={images[index]}
        width='384'
        height='480'
        alt=''
      />
      <img
        className={`img-logo ${hideElements && "hideElements"}`}
        src={logos[index]}
        width='384'
        height='480'
        alt=''
      />
    </div>
  );
}

export default BannerCarrouselMobile;
