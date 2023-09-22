import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import Upload from 'src/components/Upload'

const Store = () => {
  const [files, setFiles] = useState([])
  const onFinish = (values) => {
    console.log(values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  }
  console.log(files)

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
        label="Tên Bộ Sưu Tập"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên bộ sưu tập!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Hình Ảnh"
        name="image"
        rules={[{ required: true, message: 'Vui lòng chọn hình ảnh!' }]}
      >
        <Upload getValue={(value) => setFiles(value)} />
      </Form.Item>
      <Form.Item
        label="Miêu Tả Ngắn"
        name="desc"
        rules={[{ required: true, message: 'Vui lòng nhập miêu tả!' }]}
      >
        <Input.TextArea rows={6} />
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
