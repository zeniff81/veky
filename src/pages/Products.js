import React, { useEffect, useState } from "react";
import CatalogItem from "../components/product/CatalogItem";
import axios from "axios";

//const PRODUCTS_URL = "http://localhost:8080/products";
const PRODUCTS_URL = "https://zeniff-express.herokuapp.com/products";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(PRODUCTS_URL)
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
