import axios from 'src/ultils/axios'

export const getSizes = () => {
  return axios.get('/size')
}

export const showSize = (slug) => {
  return axios.get(`/size/${slug}`)
}

export const updateSize = (data) => {
  return axios.put('/size', data)
}

export const storeSize = (data) => {
  return axios.post('/size', data)
}

export const deteteSize = (id) => {
  return axios.delete(`/size/${id}`)
}
