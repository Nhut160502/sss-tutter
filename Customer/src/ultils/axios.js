import axios from "axios";
const axiosSetup = axios.create({
  baseURL: "http://localhost:8080/customer/api/",
});

export default axiosSetup;
