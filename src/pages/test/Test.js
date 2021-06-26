import React, { useState } from "react";
import CardFlipper from "../../components/product/CardFlipper";
import CatalogItem from "../../components/product/CatalogItem";
import CatalogItemBack from "../../components/product/CatalogItemBack";

function Test() {
  const [productInfo] = useState({
    title: "Product title",
    _id: "06556616646",
    weight: 12,
    description: "Una de las mejores mascarillas",
    price: 400,
    image:
      "https://firebasestorage.googleapis.com/v0/b/veky-4355e.appspot.com/o/Prepoo%20green-min.jpg?alt=media&token=5dcd148a-ad61-4546-8e18-18d89e060ab5",
    secret: {
      title: "¡Cuidado con el calor!",
      content:
        "Hey!, el calor excesivo puede debilitar la hebra y hacerla quebradiza. El calor excesivo puede debilitar la hebra y hacerla quebradiza."
    }
  });

  return (
    <div className='test'>
      <h1>TEST</h1>
      <hr />

      <CardFlipper
        Front={CatalogItem}
        Back={CatalogItemBack}
        productInfo={productInfo}
      />
    </div>
  );
}

export default Test;
