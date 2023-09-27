import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { configForm } from 'src/configs'
import { PropTypes } from 'prop-types'

const Store = (props) => {
  const { handleFinish } = props

  const onFinish = (values) => {
    // console.log(values)
    handleFinish && console.log(values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  }

  useEffect(() => {
    document.title = 'THÊM LOẠI SẢN PHẨM'
  }, [])

  return (
    <Form {...configForm} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Tên Loại Sản Phẩm"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên loại sản phẩm!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ width: 100 }} type="primary" htmlType="submit" className="mt-2">
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
