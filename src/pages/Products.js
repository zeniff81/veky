import React, { useEffect, useState } from "react";
import CatalogItem from "../components/product/CatalogItem";
import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://veky-server.herokuapp.com/products")
      .then(arrProducts => {
        setProducts(arrProducts.data);
        console.log(arrProducts.data);
      });
  }, []);

  return (
    <div className='products'>
      {/* title */}
      <div className='title'>
        <h1>PRODUCTOS</h1>
      </div>

      {/* search */}
      <div className='search'>
        <input type='text' placeholder='  Buscar' />
        <button className='btn btn-primary'>Buscar</button>
      </div>

      {/* catalog */}
      <div className='catalog'>
        {products.map(el => (
          <CatalogItem key={el._id} productInfo={el} />
        ))}
      </div>
    </div>
  );
}

export default Products;
