import axios from "../ultils/axios";

export const getList = async () => {
  return axios.get("/color");
};
