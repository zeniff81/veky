let PRODUCTS_URL;
let TEST = "original";

if (process.env.NODE_ENV === "development") {
  PRODUCTS_URL = "http://localhost:8080/products";

  TEST = "you are in dev";
}

if (process.env.NODE_ENV === "production") {
  PRODUCTS_URL = "https://zeniff-express.herokuapp.com/products";

  TEST = "you are in prod";
}

export { PRODUCTS_URL, TEST };
