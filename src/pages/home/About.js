import React from "react";
import about from "../../assets/img/about-bg.png";

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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          obcaecati ea cupiditate nisi harum beatae laborum veniam, fugiat
          suscipit aliquid ipsam nostrum non voluptatibus doloribus? Quos,
          corporis fugit. Eveniet, architecto.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          obcaecati ea cupiditate nisi harum beatae laborum veniam, fugiat
          suscipit aliquid ipsam nostrum non voluptatibus doloribus? Quos,
          corporis fugit. Eveniet, architecto.
        </p>
      </div>
    </div>
  );
}

export default About;
