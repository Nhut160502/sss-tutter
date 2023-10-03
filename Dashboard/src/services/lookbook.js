import axios from 'src/ultils/axios'

export const getLookbooks = () => {
  return axios.get('/collection')
}

export const storeLookbook = (data) => {
  return axios.post('/collection', data)
}

export const deleteLookbook = (id) => {
  return axios.delete(`/collection/${id}`)
}

export const showLookbook = (slug) => {
  return axios.get(`/collection/${slug}`)
}

export const updateLookbook = (data) => {
  return axios.put(`/collection`, data)
}
