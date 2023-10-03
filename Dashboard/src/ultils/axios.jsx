import axios from 'axios'

const axiosSetup = axios.create({
  baseURL: 'http://localhost:8080/api/',
  // headers: {
  //   'Content-Type': 'application/json',
  //   'content-Type': 'multipart/form-data',
  // },
})

export default axiosSetup
