import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import btnAdd from "../../assets/img/btn-add.jpg";
import AdminHeader from "./AdminHeader";
import AdminProductsItem from "./AdminProductsItem";
import ProductUploader from "./ProductUploader";
import { SERVER_URL } from "../../environments.js";
import { productsFilter } from "../../components/product/productsFilter";

function AdminProducts() {
  const [productUploader, setproductUploader] = useState(false);
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

  const closeProductUploader = () => {
    setproductUploader(false);
  };

  const broadcastNewproduct = newProduct => {
    console.log("broadcastNewproduct");
    setProducts([newProduct, ...products]);
    searchButtonRef.current.click();
  };

  const searchOnChange = e => {
    setSearch(e.target.value);
  };

  const executeSearch = () => {
    productsFilter(products, setFilteredProducts, search);
  };

  const searchOnKeyUp = e => {
    if (e.keyCode === 13 || search === "") searchButtonRef.current.click();
  };

  // deleteItem
  const deleteItem = async id => {
    console.log("HTTP:  ", process.env.REACT_APP_SERVER_URL + `${id}`);
    axios
      .delete(process.env.REACT_APP_SERVER_URL + `/${id}`)
      .then(data => {
        const currentItems = products.filter(item => item._id !== id);
        setProducts(currentItems);
        setFilteredProducts(currentItems);
        searchButtonRef.current.click();
      })
      .catch(err => console.log(err));
  };

  // return
  return (
    <div className='adminproducts'>
      <AdminHeader subtitle='Productos' />

      {/* search and add */}
      <div className='tools'>
        <input
          type='text'
          className='search'
          placeholder='  buscar'
          onKeyUp={searchOnKeyUp}
          onChange={searchOnChange}
          value={search}
        />
        <button
          className='btn btn-tertiary'
          onClick={executeSearch}
          ref={searchButtonRef}
        >
          Buscar
        </button>
        <img
          src={btnAdd}
          alt='añadir'
          className='btn-new-product'
          onClick={() => setproductUploader(true)}
        />
      </div>

      {/* items */}
      <ul className='products'>
        {filteredProducts.map(el => (
          <AdminProductsItem key={el._id} info={el} deleteMe={deleteItem} />
        ))}
      </ul>

      {productUploader && (
        <ProductUploader
          closeMe={closeProductUploader}
          broadcastNewproduct={broadcastNewproduct}
        />
      )}
    </div>
  );
}

export default AdminProducts;
