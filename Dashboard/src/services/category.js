import axios from 'src/ultils/axios'

export const getCategories = () => {
  return axios.get('/category')
}

export const findTypeCategory = (id) => {
  return axios.get(`/category/type/${id}`)
}

export const showCategory = (slug) => {
  return axios.get(`/category/${slug}`)
}

export const updateCategory = (data) => {
  return axios.put('/category', data)
}

export const storeCategory = (data) => {
  return axios.post('/category', data)
}

export const deteteCategory = (id) => {
  return axios.delete(`/category/${id}`)
}
