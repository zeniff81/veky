import React from "react";
import SocialMedia from "../socialmedia/SocialMedia";
import MenusItems from "../menu/MenusItems";

function Footer() {
  return (
    <div className='footer'>
      <div className='stripe'></div>
      <div className='title'>
        VE'KY <sup>®</sup>
      </div>
      <ul className='links'>
        <MenusItems />
      </ul>
      <SocialMedia color={"white"} />
      <hr />

      <div className='email-message'>
        ¡Entérate de nuestras ofertas, promociones y tips para tu cabello!
      </div>
      <form action='' className='email'>
        <input type='email' name='email' id='email' placeholder='  email' />
        <button>Suscribirse</button>
      </form>
      <div className='bottom'>
        <div className='copyright'>©2021 George L. • Derechos reservados</div>
        <div className='site-map'>Mapa del sitio</div>
        <div className='carreer'>Gana dinero con Veky</div>
      </div>
    </div>
  );
}

export default Footer;
