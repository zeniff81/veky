import React, { useEffect, useRef, useState } from "react";
import CatalogItem from "../components/product/CatalogItem";
import axios from "axios";
import { SERVER_URL } from "../environments.js";
import { productsFilter } from "../components/product/productsFilter";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const searchButtonRef = useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      const request = await axios.get(`${SERVER_URL}/products`);
      const data = request.data;
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  const executeSearch = () => {
    productsFilter(products, setFilteredProducts, search);
  };

  const searchOnChange = e => {
    setSearch(e.target.value);
  };

  const searchOnKeyUp = e => {
    if (e.keyCode === 13 || search === "") searchButtonRef.current.click();
  };

  return (
    <div className='products'>
      {/* title */}
      <div className='title'>
        <h1>PRODUCTOS</h1>
      </div>

      {/* search */}
      <div className='search'>
        <input
          type='text'
          placeholder='Buscar'
          onClick={executeSearch}
          onChange={searchOnChange}
          onKeyUp={searchOnKeyUp}
          ref={searchButtonRef}
        />
        <button className='btn btn-primary' onClick={executeSearch}>
          Buscar
        </button>
      </div>

      {/* catalog */}
      <div className='catalog'>
        {filteredProducts.map(el => (
          <CatalogItem key={el._id} productInfo={el} />
        ))}
      </div>
    </div>
  );
}

export default Products;
