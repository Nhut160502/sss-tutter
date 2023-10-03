import axios from 'src/ultils/axios'

export const getColors = () => {
  return axios.get('/color')
}

export const showColor = (slug) => {
  return axios.get(`/color/${slug}`)
}

export const updateColor = (data) => {
  return axios.put('/color', data)
}

export const storeColor = (data) => {
  return axios.post('/color', data)
}

export const deteteColor = (id) => {
  return axios.delete(`/color/${id}`)
}
