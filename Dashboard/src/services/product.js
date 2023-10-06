import axios from 'src/ultils/axios'

export const getProducts = () => {
  return axios.get('/product')
}

export const storeProduct = (data) => {
  return axios.post('/product', data)
}

export const showProduct = (slug) => {
  return axios.get(`/product/${slug}`)
}

export const updateProduct = (id, data) => {
  return axios.put(`/product/${id}`, data)
}

export const deleteProduct = (id) => {
  return axios.delete(`/product/${id}`)
}
