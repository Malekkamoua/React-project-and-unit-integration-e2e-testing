const axios = require("axios").default;
const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
module.exports = instance;
