import axios from "axios";

const API = axios.create({
  baseURL: "https://schoolcms.wsdevelopers.com/",
});

export default API;
