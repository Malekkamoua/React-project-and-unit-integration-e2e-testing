const axios = require("axios").default;
const instance = axios.create({
  baseURL: "https://mern-backend-2021.herokuapp.com/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" }
});
module.exports = instance;
