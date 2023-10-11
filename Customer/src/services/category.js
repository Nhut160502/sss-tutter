import axios from "../ultils/axios";

export const getList = () => {
  return axios.get("/category");
};
