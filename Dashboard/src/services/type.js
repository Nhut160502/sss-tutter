import axios from 'src/ultils/axios'

export const getTypes = async () => {
  return axios.get('/type')
}

export const storeType = async (data) => {
  return axios.post('/type', data)
}
