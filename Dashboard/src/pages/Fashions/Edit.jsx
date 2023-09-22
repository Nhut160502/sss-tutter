import { Button, Form, Input, Switch } from 'antd'
import React, { useState } from 'react'

const Edit = () => {
  const [input, setInput] = useState(true)

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
      <Form.Item label="Trạng Thái">
        <Switch
          checked={input}
          checkedChildren="Hiển Thị"
          unCheckedChildren="Ẩn"
          onChange={() => {
            setInput(!input)
          }}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ width: 100 }} type="primary" htmlType="submit" className="mt-2">
          Cập Nhật
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Edit
