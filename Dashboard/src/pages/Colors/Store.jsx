import React from 'react'
import { configForm, rulesNonMes } from 'src/configs/form'
import { Button, ColorPicker, Form, Input } from 'antd'
import { PropTypes } from 'prop-types'
import { storeColor } from 'src/services/color'
import Toast from 'src/components/Toast'
import { useNavigate } from 'react-router-dom'
function Store(props) {
  const { handleFinish } = props
  const navigate = useNavigate()
  const onFinish = async (values) => {
    handleFinish && console.log(values)
    const { r, g, b, a } = values?.code?.metaColor
    const colorCode = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${Math.round(a)})`
    values.code = colorCode
    await storeColor(values)
      .then((res) => {
        Toast.success('Store color successfully!')
        navigate(-1)
      })
      .catch(() => Toast.error('Error!'))
  }

  return (
    <Form {...configForm} onFinish={onFinish}>
      <Form.Item label="Tên Màu Sắc" name="name" rules={rulesNonMes}>
        <Input />
      </Form.Item>
      <Form.Item label="Mã Màu" name="code" rules={rulesNonMes}>
        <ColorPicker showText format="rgb" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button htmlType="submit" type="primary">
          Thêm
        </Button>
      </Form.Item>
    </Form>
  )
}

Store.propTypes = {
  handleFinish: PropTypes.func,
}
export default Store
