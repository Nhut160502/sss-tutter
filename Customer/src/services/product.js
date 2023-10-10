import axios from "../ultils/axios";

export const detailProduct = (slug) => {
  return axios.get(`/product/${slug}`);
};

export const newArrivals = () => {
  return axios.get("/product/newarrivals");
};

export const bestSaller = () => {
  return axios.get("/product/bestsaller");
};

export const getList = () => {
  return axios.get("/product");
};
