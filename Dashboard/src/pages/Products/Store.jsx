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
  const [colorThumbnail, setColorThumbnail] = useState([])

  const [openForm, setOpenForm] = useState('')

  const [media, setMedia] = useState([])
  const [stock, setStock] = useState([])

  const onFinish = (values) => {
    values.thumbnail = thumbnail
    values.gallery = gallery
    values.stock = stock
    console.log(values)
  }

  const handleGetGallery = (files, colorId) => {
    if (files.length) {
      const check = media.some((item) => item.colorId === colorId)
      if (check) {
        const arr = media
        arr.find((item) => item.colorId && (item.gallery = files))
      } else {
        setMedia((pre) => [...pre, { colorId: colorId, gallery: files }])
      }
    } else {
      const arr = media
      arr.find((item) => item.colorId && (item.gallery = []))
      // setMedia(media.filter((item) => item.colorId !== colorId))
    }
    // !files.length ? delete gallery[id] : setGallery({ ...gallery, [`gallery-${id}`]: files })
  }

  const handleGetThumbnail = (files, colorId) => {
    console.log(files)
    if (files.length) {
      const check = media.some((item) => item.colorId === colorId)
      console.log(check)
      if (check) {
        const arr = media
        arr.find((item) => item.colorId && (item.thumbnail = files))
      } else {
        setMedia((pre) => [...pre, { colorId: colorId, thumbnail: files }])
      }
    } else {
      const arr = media
      arr.find((item) => item.colorId && (item.thumbnail = []))
    }

    // !files.length
    //   ? delete thumbnail[colorId]
    //   : setThumbnail({ ...thumbnail, [`thumbnail-${colorId}`]: files })
  }

  console.log(media)

  const handleChangeStock = (qty, sizeId, colorId) => {
    const check = stock.some((item) => item.sizeId === sizeId && item.colorId === colorId)
    if (check) {
      const arr = stock
      arr.find((item) => item.sizeId === sizeId && item.colorId === colorId && (item.qty = qty))
    } else {
      setStock((pre) => [...pre, { colorId: colorId, sizeId: sizeId, qty: qty }])
    }
  }

  const handleDeselectColor = (value) => {
    setStock(stock.filter((item) => item.colorId !== value))
    setColorThumbnail(colorThumbnail.filter((color) => color.id !== value))
    delete gallery[value]
  }

  const handleDeselectSize = (value) => {
    setStock(stock.filter((item) => item.sizeId !== value))
    setSizeData(sizesData.filter((item) => item.id !== value))
  }

  const handleFinishFormAdd = (res) => {
    setOpenForm('')
    const arr = []
    switch (openForm) {
      case 'type':
        arr.push({ value: res.data._id, label: res.data.name }, ...types)
        setTypes(arr)
        break
      case 'lookbook':
        arr.push({ value: res.data._id, label: res.data.name }, ...lookbooks)
        setLookbooks(arr)
        break
      case 'category':
        arr.push({ value: res.data._id, label: res.data.name }, ...categories)
        setCategories(arr)
        break
      case 'colors':
        arr.push({ value: res.data._id, label: res.data.name }, ...colors)
        setColors(arr)
        break
      case 'sizes':
        arr.push({ value: res.data._id, label: res.data.name }, ...sizes)
        setSizes(arr)
        break
      default:
        break
    }
  }

  const handleChangeTypes = async (id) => {
    setCategories([])
    try {
      const { data } = await findTypeCategory(id)
      data.map((item) => setCategories((pre) => [...pre, { value: item._id, label: item.name }]))
    } catch (error) {
      Toast.error('Error!')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const setData = (data, setData) => {
        data.map((item) => setData((pre) => [...pre, { value: item._id, label: item.name }]))
      }

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
            onChange={(value) => setOpenForm(value)}
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
          <CloseOutlined className="btn-close" onClick={() => setOpenForm('')} />
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
            onSelect={(_, e) => {
              setColorThumbnail((pre) => [...pre, { id: e.value, name: e.label }])
            }}
            onDeselect={handleDeselectColor}
            options={colors}
          />
        </Form.Item>
        {/* Size */}
        <Form.Item name="size" label="Kích Thước" rules={rulesNonMes}>
          <Select
            mode="multiple"
            placeholder="Chọn kích thước"
            onSelect={(_, e) => setSizeData((pre) => [...pre, { id: e.value, name: e.label }])}
            onDeselect={handleDeselectSize}
            options={sizes}
          />
        </Form.Item>
        {colorThumbnail.length > 0 &&
          colorThumbnail.map((color) => (
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
              colorThumbnail.length > 0 &&
              colorThumbnail.map((color) => {
                return (
                  <Fragment key={color.id}>
                    {/* stock */}
                    <Form.Item
                      label={`Số Lượng Size ${size.name} - Màu ${color.name}`}
                      name={Math.random().toString(36).substring(7)}
                      rules={rulesNonMes}
                    >
                      <Input
                        type="number"
                        onChange={(e) => handleChangeStock(e.target.value, size.id, color.id)}
                      />
                    </Form.Item>
                  </Fragment>
                )
              }),
          )}
        {/* price */}
        <Form.Item label={`Giá Sản Phẩm`} name={`price`} rules={rulesNonMes}>
          <Input />
        </Form.Item>

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
