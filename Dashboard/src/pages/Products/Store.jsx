import React, { Fragment, useEffect, useState } from 'react'
import JoditEditor from 'jodit-react'
import { Button, Form, Input, Select, Switch } from 'antd'
import { styled } from 'styled-components'
import Upload from 'src/components/Upload'
import { configForm, rulesMesImg, rulesNonMes } from 'src/configs/form'
import { Top } from 'src/components/Styled'
import { Store as StoreCategory } from '../Categories'
import { Store as StoreLookbook } from '../Lookbooks'
import { Store as StoreFashion } from '../Fashions'
import { Store as StoreColor } from '../Colors'
import { Store as StoreSize } from '../Sizes'
import { CloseOutlined } from '@ant-design/icons'
import Toast from 'src/components/Toast'
import { getTypes } from 'src/services/type'
import { getLookbooks } from 'src/services/lookbook'
import { findTypeCategory, getCategories } from 'src/services/category'
import { getColors } from 'src/services/color'
import { getSizes } from 'src/services/size'

const Store = () => {
  const [types, setTypes] = useState([])
  const [lookbooks, setLookbooks] = useState([])
  const [categories, setCategories] = useState([])
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const [thumbnail, setThumbnail] = useState({})
  const [gallery, setGallery] = useState({})
  const [sizesData, setSizeData] = useState([])
  const [colorData, setColorData] = useState([])
  const [stock, setStock] = useState([])
  const [price, setPrice] = useState([])
  const [openForm, setOpenForm] = useState('')

  const [defaultValue, setDefaultValue] = useState({
    type: null,
    lookbook: null,
    category: null,
    colors: null,
    sizes: null,
  })

  const onFinish = (values) => {
    values.thumbnail = thumbnail
    values.gallery = gallery
    values.stock = stock
    values.price = price
    console.log(values)
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
  const handleFinishFormAdd = (res) => {
    setOpenForm('')
    switch (openForm) {
      case 'sizes':
        setSizes((pre) => [...pre, { value: res.data._id, label: res.data.name }])
        setDefaultValue({ ...defaultValue, sizes: res.data._id })
        break
      default:
        break
    }
  }

  console.log(defaultValue.sizes)

  const handleChangeTypes = async (id) => {
    setCategories([])
    try {
      const { data } = await findTypeCategory(id)
      data.map((item) => setCategories((pre) => [...pre, { value: item._id, label: item.name }]))
    } catch (error) {
      Toast.error('Error!')
    }
  }

  const setData = (data, setData) => {
    data.map((item) => setData((pre) => [...pre, { value: item._id, label: item.name }]))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resType = await getTypes()
        const resLook = await getLookbooks()
        const resCat = await getCategories()
        const resColor = await getColors()
        const resSize = await getSizes()
        if (
          resType.success &&
          resLook.success &&
          resCat.success &&
          resColor.success &&
          resSize.success
        ) {
          setTypes([])
          setLookbooks([])
          setCategories([])
          setColors([])
          setSizes([])

          setData(resType.data, setTypes)
          setData(resLook.data, setLookbooks)
          setData(resColor.data, setColors)
          setData(resSize.data, setSizes)
        }
      } catch (error) {
        Toast.error('Error')
      }
    }
    fetchData()
  }, [])

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
            options={[
              { value: 'type', label: 'Loại Sản Phẩm' },
              { value: 'lookbook', label: 'Bộ Sưu Tập' },
              { value: 'category', label: 'Danh Mục' },
              { value: 'colors', label: 'Màu Sắc' },
              { value: 'sizes', label: 'Kích Thước' },
            ]}
          />
        </Container>
      </Top>
      <FormAdd className={openForm !== '' && 'show'}>
        <Content>
          <CloseOutlined className="btn-close" onClick={handleCloseFormAdd} />
          {openForm === 'type' && <StoreFashion handleFinish={handleFinishFormAdd} />}
          {openForm === 'lookbook' && <StoreLookbook handleFinish={handleFinishFormAdd} />}
          {openForm === 'category' && <StoreCategory handleFinish={handleFinishFormAdd} />}
          {openForm === 'colors' && <StoreColor handleFinish={handleFinishFormAdd} />}
          {openForm === 'sizes' && <StoreSize handleFinish={handleFinishFormAdd} />}
        </Content>
      </FormAdd>
      <Form {...configForm} onFinish={onFinish}>
        {/* Category Parent */}
        <Form.Item name="categoryParent" label="Loại Sản Phẩm" rules={rulesNonMes}>
          <Select placeholder="Chọn loại sản phẩm" options={types} onChange={handleChangeTypes} />
        </Form.Item>

        {/* Lookbook */}
        <Form.Item label="Bộ Sưu Tập" name="collection" rules={rulesNonMes}>
          <Select placeholder="Chọn bộ sưu tập" options={lookbooks} />
        </Form.Item>

        {/* category */}
        <Form.Item
          name={(categories.length > 0 && 'category') || null}
          label="Danh Mục"
          rules={rulesNonMes}
        >
          <Select placeholder="Chọn danh mục" options={categories || []} onClear />
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
            onSelect={(_, e) => setColorData((pre) => [...pre, { id: e.value, name: e.children }])}
            onDeselect={(_, e) => {
              setColorData(colorData.filter((color) => color.id !== e.value))
              delete gallery[e.value]
            }}
            options={colors}
          />
        </Form.Item>

        {/* Size */}
        <Form.Item name="size" label="Kích Thước" rules={rulesNonMes}>
          {(!defaultValue.sizes && (
            <Select
              mode="multiple"
              placeholder="Chọn kích thước"
              onSelect={(_, e) => setSizeData((pre) => [...pre, { id: e.value, name: e.children }])}
              onDeselect={(_, e) => setSizeData(sizesData.filter((item) => item.id !== e.value))}
              options={sizes}
            />
          )) || (
            <Select
              mode="multiple"
              placeholder="Chọn kích thước"
              onSelect={(_, e) => setSizeData((pre) => [...pre, { id: e.value, name: e.children }])}
              onDeselect={(_, e) => setSizeData(sizesData.filter((item) => item.id !== e.value))}
              options={sizes}
              defaultValue={defaultValue.sizes}
            />
          )}
        </Form.Item>

        {colorData.length > 0 &&
          colorData.map((color) => (
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

        {sizesData.length > 0 &&
          sizesData.map(
            (size) =>
              colorData.length > 0 &&
              colorData.map((color) => {
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
