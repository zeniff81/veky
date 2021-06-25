import React from "react";
import about from "../../assets/img/about-bg.jpg";

function About() {
  return (
    <div className='about'>
      <img src={about} alt='' />
      <div className='titles'>
        <div className='title1'>sobre</div>
        <div className='title2'>nosotros</div>
      </div>

      <div className='content'>
        <h2>VEKY SRL</h2>
        <p>
          Creamos <i>productos naturales</i>, hechos con amor y entrega para
          darte bienestar capilar, con la promesa de restaurar tu cabello y
          brindar la naturalidad, brillo, suavidad, nutrición y sobre todo la{" "}
          <b>reestructuración</b> que tu pelo necesita, manteniendo y aumentando
          los resultados en el tiempo.
        </p>
        <p>
          <i>
            <b>!ES TIEMPO DE UN CABELLO HERMOSO!</b>
          </i>
        </p>
      </div>
    </div>
  );
}

export default About;
