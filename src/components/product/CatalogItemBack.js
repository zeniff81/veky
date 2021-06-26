import React, { useEffect, useState } from "react";

const CatalogItemBack = ({ productInfo }) => {
  const [title, setTitle] = useState(" pronto...");
  const [content, setContent] = useState(
    "No hay secretos en esta tarjeta. Vuelve luego."
  );

  useEffect(() => {
    if (productInfo.secret != null) {
      setTitle(productInfo.secret.title || "pronto...");
      setContent(
        productInfo.secret.content ||
          "No hay secretos en esta tarjeta. Vuelve luego."
      );
    }

    console.log(productInfo);
  }, []);

  return (
    <div className='catalogitemback'>
      <div className='caption'>secretos</div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default CatalogItemBack;
