export const configForm = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  style: { maxWidth: 800 },
  initialValues: { remember: true },
  autoComplete: 'off',
  className: 'form-wrapper',
}

export const rulesNonMes = [
  {
    required: true,
    message: '',
  },
]

export const rulesMesImg = [
  {
    required: true,
    message: 'Vui lòng thêm hình ảnh!',
  },
]
