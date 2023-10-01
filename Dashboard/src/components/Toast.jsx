import { toast } from 'react-toastify'

const config = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
}
const Toast = {
  success: (title) => {
    toast.success(title, config)
  },
  warning: (title) => {
    toast.warning(title, config)
  },
  error: (title) => {
    toast.error(title, config)
  },
}

export default Toast
