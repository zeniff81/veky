import React from "react";
import About from "./About";
import Contact from "./Contact";
import HomeMain from "./HomeMain";
import HomeProducts from "./HomeProducts";

function Home() {
  return (
    <div className='home'>
      <HomeMain />
      <HomeProducts />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
