const axios = require("axios").default;
const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
module.exports = instance;
