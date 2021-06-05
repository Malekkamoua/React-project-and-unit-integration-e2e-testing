const axios = require("axios").default;
const instance = axios.create({
  baseURL: "http://localhost:8080",

  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});
module.exports = instance;
// baseURL: "https://mern-backend-2021.herokuapp.com/",
