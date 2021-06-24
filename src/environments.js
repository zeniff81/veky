let SERVER_URL;

if (process.env.NODE_ENV === "development") {
  SERVER_URL = "http://localhost:8080";
}

if (process.env.NODE_ENV === "production") {
  SERVER_URL = "https://zeniff-express.herokuapp.com";
}

export { SERVER_URL };
