import JoditEditor from 'jodit-react'
import { Button, Form, Input, Select, Switch } from 'antd'
import React, { Fragment, useEffect, useState } from 'react'
import Upload from 'src/components/Upload'
import { configForm, rulesMesImg, rulesNonMes } from 'src/configs'

const Store = () => {
  const [thumbnail, setThumbnail] = useState({})
  const [gallery, setGallery] = useState({})
  const [sizes, setSize] = useState([])
  const [colors, setColors] = useState([])
  const [stock, setStock] = useState([])
  const [price, setPrice] = useState([])

  const onFinish = (values) => {
    values.thumbnail = thumbnail
    values.gallery = gallery
    values.stock = stock
    values.price = price
    console.log(values)
  }
  const onFinishFailed = (err) => {
    console.log(err)
  }

  const handleGetGallery = (files, id) => {
    !files.length ? delete gallery[id] : setGallery({ ...gallery, [`gallery-${id}`]: files })
  }

  const handleGetThumbnail = (files, id) => {
    !files.length
      ? delete thumbnail[id]
      : setThumbnail({ ...thumbnail, [`thumbnail-${id}`]: files })
  }

  const handleChangeStock = (e, id) => {
    setStock({ ...stock, [id]: e.target.value })
  }
  const handleChangePrice = (e, id) => {
    setPrice({ ...price, [id]: e.target.value })
  }

  useEffect(() => {
    document.title = 'THÊM SẢN PHẨM'
  }, [])

  return (
    <Form {...configForm} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      {/* Category Parent */}
      <Form.Item name="categoryParent" label="Loại Sản Phẩm" rules={rulesNonMes}>
        <Select placeholder="Chọn loại sản phẩm">
          <Select.Option value="for-him" label="For Him">
            For Him
          </Select.Option>
        </Select>
      </Form.Item>

      {/* Lookbook */}
      <Form.Item label="Bộ Sưu Tập" name="collection" rules={rulesNonMes}>
        <Select placeholder="Chọn bộ sưu tập">
          <Select.Option value="summer">Summer</Select.Option>
        </Select>
      </Form.Item>

      {/* category */}
      <Form.Item name="category" label="Danh Mục" rules={rulesNonMes}>
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
      <Form.Item name="name" label="Tên Sản Phẩm" rules={rulesNonMes}>
        <Input placeholder="Tên sản phẩm" />
      </Form.Item>

      {/* Color */}
      <Form.Item name="color" label="Màu Sắc" rules={rulesNonMes}>
        <Select
          mode="multiple"
          placeholder="Chọn màu sắc"
          onSelect={(_, e) => setColors((pre) => [...pre, { id: e.value, name: e.children }])}
          onDeselect={(_, e) => {
            setColors(colors.filter((color) => color.id !== e.value))
            delete gallery[e.value]
          }}
        >
          <Select.Option value="den">Đen</Select.Option>
          <Select.Option value="trang">Trắng</Select.Option>
          <Select.Option value="do">Đỏ</Select.Option>
          <Select.Option value="vang">Vàng</Select.Option>
        </Select>
      </Form.Item>

      {/* Size */}
      <Form.Item name="size" label="Kích Thước" rules={rulesNonMes}>
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
          <Fragment key={color.id}>
            <Form.Item
              label={`Hình Ảnh Đại Diện Màu ${color.name}`}
              name="thumbnail"
              rules={!thumbnail[`thumbnail-${color.id}`]?.length && rulesMesImg}
            >
              <Upload
                id={`thumbnail-${color.id}`}
                getValue={(file) => handleGetThumbnail(file, color.id)}
              />
            </Form.Item>
            <Form.Item
              label={`Hình Ảnh Chi Tiết Màu ${color.name}`}
              name="gallery"
              rules={!gallery[`gallery-${color.id}`]?.length && rulesMesImg}
            >
              <Upload
                id={`gallery-${color.id}`}
                multiple
                getValue={(file) => handleGetGallery(file, color.id)}
              />
            </Form.Item>
          </Fragment>
        ))}

      {sizes.length > 0 &&
        sizes.map(
          (size) =>
            colors.length > 0 &&
            colors.map((color) => {
              const id = `${size.id}-${color.id}`
              return (
                <Fragment key={color.id}>
                  {/* stock */}
                  <Form.Item
                    label={`Số Lượng Size ${size.name} - Màu ${color.name}`}
                    name={`stock-${size.id}-${color.id}`}
                    rules={rulesNonMes}
                  >
                    <Input type="number" onChange={(e) => handleChangeStock(e, id)} />
                  </Form.Item>
                  <Form.Item
                    label={`Giá Size ${size.name} - Màu ${color.name}`}
                    name={`price-${size.id}-${color.id}`}
                    rules={rulesNonMes}
                  >
                    <Input onChange={(e) => handleChangePrice(e, id)} />
                  </Form.Item>
                </Fragment>
              )
            }),
        )}

      {/* socical */}
      <Form.Item label="Link Shopee" name="idShopee">
        <Input />
      </Form.Item>
      <Form.Item label="Link Lazada" name="idLazada">
        <Input />
      </Form.Item>

      <Form.Item label="Mã Vạch" name="barcode" rules={rulesNonMes}>
        <Input />
      </Form.Item>
      {/* pre order */}
      <Form.Item label="Đặt Hàng Trước" name={'preOder'}>
        <Switch />
      </Form.Item>

      {/* desc */}
      <Form.Item label="Mô Tả" name="desc">
        <JoditEditor tabIndex={12} className="jodit" />
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
