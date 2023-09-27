import React, { Fragment, useEffect, useState } from 'react'
import JoditEditor from 'jodit-react'
import { Button, Form, Input, Select, Switch } from 'antd'
import { styled } from 'styled-components'
import Upload from 'src/components/Upload'
import { configForm, rulesMesImg, rulesNonMes } from 'src/configs'
import { Top } from 'src/components/Styled'
import { Store as StoreCategory } from '../Categories'
import { Store as StoreLookbook } from '../Lookbooks'
import { Store as StoreFashion } from '../Fashions'
import { Store as StoreColor } from '../Colors'
import { Store as StoreSize } from '../Sizes'
import { CloseOutlined } from '@ant-design/icons'

const Store = () => {
  const [thumbnail, setThumbnail] = useState({})
  const [gallery, setGallery] = useState({})
  const [sizes, setSize] = useState([])
  const [colors, setColors] = useState([])
  const [stock, setStock] = useState([])
  const [price, setPrice] = useState([])
  const [openForm, setOpenForm] = useState('')

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

  const handleChangeFormAdd = (value) => {
    setOpenForm(value)
  }
  const handleCloseFormAdd = () => {
    setOpenForm('')
  }

  useEffect(() => {
    document.title = 'THÊM SẢN PHẨM'
  }, [])

  return (
    <>
      <Top>
        <Container>
          <label>Thêm Mới:</label>
          <Select
            placeholder="Chọn"
            onChange={handleChangeFormAdd}
            value={openForm === '' ? null : openForm}
          >
            <Select.Option value="type">Loại Sản Phẩm</Select.Option>
            <Select.Option value="lookbook">Bộ Sưu Tập</Select.Option>
            <Select.Option value="category">Danh Mục</Select.Option>
            <Select.Option value="colors">Màu Sắc</Select.Option>
            <Select.Option value="sizes">Kích Thước</Select.Option>
          </Select>
        </Container>
      </Top>
      <FormAdd className={openForm !== '' && 'show'}>
        <Content>
          <CloseOutlined className="btn-close" onClick={handleCloseFormAdd} />
          {openForm === 'type' && <StoreFashion handleFinish={(val) => console.log(val)} />}
          {openForm === 'lookbook' && <StoreLookbook handleFinish={(val) => console.log(val)} />}
          {openForm === 'category' && <StoreCategory handleFinish={(val) => console.log(val)} />}
          {openForm === 'colors' && <StoreColor handleFinish={(val) => console.log(val)} />}
          {openForm === 'sizes' && <StoreSize handleFinish={(val) => console.log(val)} />}
        </Content>
      </FormAdd>
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
        <Form.Item label="Thêm Vào Style Pick" name={'stylePick'}>
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
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .ant-select-selector {
    min-width: 150px;
  }
`

const FormAdd = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 9999;
  left: 0;
  top: -100%;
  transition: all 0.3s;

  &.show {
    top: 0;
  }
`
const Content = styled.div`
  background-color: #fff;
  width: 40%;
  height: auto;
  padding: 4rem;
  position: relative;
  .btn-close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1rem;
    cursor: pointer;
  }
`

export default Store
