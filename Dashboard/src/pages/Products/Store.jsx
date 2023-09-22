import { Button, Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import Upload from 'src/components/Upload'

const Store = () => {
  const [files, setFiles] = useState([])
  const [sizes, setSize] = useState([])
  const onFinish = (values) => {
    values.image = files
    console.log(values)
  }
  const onFinishFailed = () => {}

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 800 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="categoryParent"
        label="Loại Sản Phẩm"
        rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm!' }]}
      >
        <Select placeholder="Chọn loại sản phẩm">
          <Select.Option value="for-him" label="For Him">
            For Him
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Bộ Sưu Tập"
        name="collection"
        rules={[{ required: true, message: 'Vui lòng chọn bộ sưu tập' }]}
      >
        <Select placeholder="Chọn bộ sưu tập">
          <Select.Option value="summer">Summer</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="category"
        label="Danh Mục"
        rules={[{ required: true, message: 'Vui lòng chọn danh mục!' }]}
      >
        <Select mode="multiple" placeholder="Chọn danh mục">
          <Select.Option value="for-him" label="For Him">
            For Him
          </Select.Option>

          <Select.Option value="for-her" label="For Him">
            For Her
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="name"
        label="Tên Sản Phẩm"
        rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="image"
        label="Hình Ảnh"
        rules={[files.length <= 0 && { required: true, message: 'Vui lòng chọn hình ảnh!' }]}
      >
        <Upload getValue={(file) => setFiles(file)} />
      </Form.Item>

      <Form.Item
        name="size"
        label="Kích Thước"
        rules={[{ required: true, message: 'Vui lòng chọn kích thước sản phẩm!' }]}
      >
        <Select mode="multiple" placeholder="Chọn kích thước">
          <Select.Option value="s">S</Select.Option>
          <Select.Option value="m">M</Select.Option>
          <Select.Option value="l">L</Select.Option>
          <Select.Option value="xl">XL</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="color"
        label="Màu Sắc"
        rules={[{ required: true, message: 'Vui lòng chọn kích thước sản phẩm!' }]}
      >
        <Select mode="multiple" placeholder="Chọn kích thước" onChange={(e) => console.log(e)}>
          <Select.Option value="den">Đen</Select.Option>
          <Select.Option value="trang">Trắng</Select.Option>
          <Select.Option value="do">Đỏ</Select.Option>
          <Select.Option value="vang">Vàng</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit" type="primary">
          Thêm
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Store
