import axios from 'axios'

const axiosSetup = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    'content-Type': 'multipart/form-data',
  },
})

export default axiosSetup
