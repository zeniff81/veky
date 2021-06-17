import React, { useEffect, useState } from "react";
import instagram from "../../assets/img/instagram.svg";
import whatsapp from "../../assets/img/whatsapp.svg";
import facebook from "../../assets/img/facebook.svg";
import email from "../../assets/img/email.svg";
import instagramWhite from "../../assets/img/instagram-white.svg";
import whatsappWhite from "../../assets/img/whatsapp-white.svg";
import facebookWhite from "../../assets/img/facebook-white.svg";
import emailWhite from "../../assets/img/email-white.svg";

function SocialMedia({ color }) {
  const [facebookIcon, setFacebookIcon] = useState(facebook);
  const [instagramIcon, setInstagramIcon] = useState(instagram);
  const [emailIcon, setEmailIcon] = useState(email);
  const [whatsappIcon, setWhatsappIcon] = useState(whatsapp);

  useEffect(() => {
    if (color === "white") {
      setFacebookIcon(facebookWhite);
      setInstagramIcon(instagramWhite);
      setEmailIcon(emailWhite);
      setWhatsappIcon(whatsappWhite);
    }
  }, [color]);

  return (
    <div className='social-media'>
      <div className='sm-img-container'>
        <img src={instagramIcon} alt='instagram' />
      </div>
      <div className='sm-img-container'>
        <img src={facebookIcon} alt='facebook' />
      </div>
      <div className='sm-img-container'>
        <img src={emailIcon} alt='email' />
      </div>
      <div className='sm-img-container'>
        <img src={whatsappIcon} alt='whatsap' />
      </div>
    </div>
  );
}

export default SocialMedia;
