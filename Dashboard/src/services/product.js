import axios from 'src/ultils/axios'

export const getProducts = () => {
  return axios.get('/product')
}

export const storeProduct = (data) => {
  return axios.post('/product', data)
}
