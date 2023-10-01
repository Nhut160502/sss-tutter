import { hiddenLoading, visibleLoading } from 'src/providers/loadingSlice'
import axiosSetup from './axios'
import Toast from 'src/components/Toast'

// Add a request interceptor
const axiosInterceptor = (dipatch) => {
  axiosSetup.interceptors.request.use(
    function (config) {
      dipatch(visibleLoading())
      // Do something before request is sent
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    },
  )

  // Add a response interceptor
  axiosSetup.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      dipatch(hiddenLoading())
      return response?.data
    },

    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error?.response?.data?.error) {
        const { code, keyValue } = error.response.data.error
        switch (code) {
          case 11000:
            Toast.error(`${Object.values(keyValue)} has been used!`)
            break

          default:
            break
        }
      }
      dipatch(hiddenLoading())
      // return Promise.reject(error)
    },
  )
}

export default axiosInterceptor
