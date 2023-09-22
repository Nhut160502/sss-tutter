import React from 'react'
import { Button, Form, Input } from 'antd'

const Store = () => {
  const onFinish = (values) => {
    console.log(values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 800 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
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

export default Store
