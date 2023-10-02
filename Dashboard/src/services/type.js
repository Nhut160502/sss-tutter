import axios from 'src/ultils/axios'

export const getTypes = () => {
  return axios.get('/type')
}

export const storeType = (data) => {
  return axios.post('/type', data)
}

export const deleteType = (id) => {
  return axios.delete(`/type/${id}`)
}

export const showType = (slug) => {
  return axios.get(`/type/${slug}`)
}

export const updateType = (id, data) => {
  return axios.put(`/type/${id}`, data)
}
