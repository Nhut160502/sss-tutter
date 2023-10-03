import axios from 'src/ultils/axios'

export const getProducts = () => {
  return axios.get('/product')
}
