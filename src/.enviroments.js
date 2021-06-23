let PRODUCTS_URL;

if (process.env.NODE_ENV === "development") {
  PRODUCTS_URL = "http://localhost:8080/products";
}

if (process.env.NODE_ENV === "production") {
  PRODUCTS_URL = "https://zeniff-express.herokuapp.com/products";
}

export { PRODUCTS_URL };
