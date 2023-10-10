import axios from "../ultils/axios";

export const newArrivals = () => {
  return axios.get("/product/newarrivals");
};

export const bestSaller = () => {
  return axios.get("/product/bestsaller");
};

export const detailProduct = (slug) => {
  return axios.get(`/product/${slug}`);
};
