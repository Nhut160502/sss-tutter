import { Button, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import Upload from 'src/components/Upload'
import { configForm } from 'src/configs'

const Store = () => {
  const [files, setFiles] = useState({})
  const [sizes, setSize] = useState([])
  const [colors, setColors] = useState([])
  const onFinish = (values) => {
    values.files = files
    console.log(values)
  }
  const onFinishFailed = (err) => {
    console.log(err)
  }

  const handleGetFile = (file, id) => {
    !file.length ? delete files[id] : setFiles({ ...files, [id]: file })
  }

  useEffect(() => {
    document.title = 'THÊM SẢN PHẨM'
  }, [])

  return (
    <Form {...configForm} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      {/* Category Parent */}
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

      {/* Lookbook */}
      <Form.Item
        label="Bộ Sưu Tập"
        name="collection"
        rules={[{ required: true, message: 'Vui lòng chọn bộ sưu tập' }]}
      >
        <Select placeholder="Chọn bộ sưu tập">
          <Select.Option value="summer">Summer</Select.Option>
        </Select>
      </Form.Item>

      {/* category */}
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

      {/* Name */}
      <Form.Item
        name="name"
        label="Tên Sản Phẩm"
        rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
      >
        <Input />
      </Form.Item>

      {/* Color */}
      <Form.Item
        name="color"
        label="Màu Sắc"
        rules={[{ required: true, message: 'Vui lòng chọn kích thước sản phẩm!' }]}
      >
        <Select
          mode="multiple"
          placeholder="Chọn màu sắc"
          onSelect={(_, e) => setColors((pre) => [...pre, { id: e.value, name: e.children }])}
          onDeselect={(_, e) => {
            setColors(colors.filter((color) => color.id !== e.value))
            delete files[e.value]
          }}
        >
          <Select.Option value="den">Đen</Select.Option>
          <Select.Option value="trang">Trắng</Select.Option>
          <Select.Option value="do">Đỏ</Select.Option>
          <Select.Option value="vang">Vàng</Select.Option>
        </Select>
      </Form.Item>

      {/* Size */}
      <Form.Item
        name="size"
        label="Kích Thước"
        rules={[{ required: true, message: 'Vui lòng chọn kích thước sản phẩm!' }]}
      >
        <Select
          mode="multiple"
          placeholder="Chọn kích thước"
          onSelect={(_, e) => setSize((pre) => [...pre, { id: e.value, name: e.children }])}
          onDeselect={(_, e) => setSize(sizes.filter((item) => item.id !== e.value))}
        >
          <Select.Option value="s">S</Select.Option>
          <Select.Option value="m">M</Select.Option>
          <Select.Option value="l">L</Select.Option>
          <Select.Option value="xl">XL</Select.Option>
        </Select>
      </Form.Item>

      {colors.length > 0 &&
        colors.map((color) => (
          <Form.Item
            key={color.id}
            label={`Hình Ảnh Sản Phẩm Màu ${color.name}`}
            name="colorImage"
            rules={[
              !files[color.id]?.length && {
                required: true,
                message: `Vui lòng chọn hình ảnh sản phẩm!`,
              },
            ]}
          >
            <Upload id={color.id} getValue={(file) => handleGetFile(file, color.id)} />
          </Form.Item>
        ))}

      {sizes.length > 0 &&
        sizes.map(
          (size) =>
            colors.length > 0 &&
            colors.map((color) => (
              <Form.Item
                key={color.id}
                label={`Số Lượng Size ${size.name} - Màu ${color.name}`}
                name={`stock-${color.id}`}
                rules={[
                  {
                    required: true,
                    message: `Vui lòng thêm số lượng sản phẩm!`,
                  },
                ]}
              >
                <Input type="number" name="stock[]" />
              </Form.Item>
            )),
        )}

      <Form.Item label="Link Shopee" name="idShopee">
        <Input />
      </Form.Item>
      <Form.Item label="Link Lazada" name="idLazada">
        <Input />
      </Form.Item>

      <Form.Item
        label="Giá Sản Phẩm"
        name="price"
        rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
      >
        <Input />
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
