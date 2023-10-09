import React, { Fragment, useEffect, useState } from 'react'
import JoditEditor from 'jodit-react'
import { Button, Form, Input, Select, Switch } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

import Upload from 'src/components/Upload'
import { configForm, rulesNonMes } from 'src/configs/form'
import { Top } from 'src/components/Styled'
import { Store as StoreCategory } from '../Categories'
import { Store as StoreColor } from '../Colors'
import { Store as StoreSize } from '../Sizes'
import Toast from 'src/components/Toast'
import { getTypes } from 'src/services/type'
import { getLookbooks } from 'src/services/lookbook'
import { findTypeCategory } from 'src/services/category'
import { getColors } from 'src/services/color'
import { getSizes } from 'src/services/size'
import { storeProduct } from 'src/services/product'

const Store = () => {
  const navigate = useNavigate()
  const [media, setMedia] = useState([])
  const [stock, setStock] = useState([])
  const [types, setTypes] = useState([])
  const [sizes, setSizes] = useState([])
  const [colors, setColors] = useState([])
  const [gallery, setGallery] = useState([])
  const [openForm, setOpenForm] = useState('')
  const [sizesData, setSizeData] = useState([])
  const [lookbooks, setLookbooks] = useState([])
  const [thumbnail, setThumbnail] = useState([])
  const [colorData, setColorData] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const setData = (data, call) =>
        data.map((item) => call((pre) => [...pre, { value: item._id, label: item.name }]))
      try {
        const resType = await getTypes()
        const resSize = await getSizes()
        const resColor = await getColors()
        const resLook = await getLookbooks()
        if (resType.success && resLook.success && resColor.success && resSize.success) {
          setTypes([])
          setSizes([])
          setColors([])
          setLookbooks([])

          setData(resType.data, setTypes)
          setData(resSize.data, setSizes)
          setData(resColor.data, setColors)
          setData(resLook.data, setLookbooks)
        }
      } catch (error) {
        Toast.error('Error')
      }
    }
    fetchData()
  }, [])

  const handleGetGallery = (files, colorId) => {
    if (files.length) {
      const check = media.some((item) => item.color === colorId)
      if (check) media.map((item, key) => item.color === colorId && (media[key].gallery = files))
      else setMedia((pre) => [...pre, { color: colorId, gallery: files }])
    } else media.map((item, key) => item.color === colorId && delete media[key].gallery)
  }

  const handleGetThumbnail = (files, colorId) => {
    if (files.length) {
      const file = files[0]
      const check = media.some((item) => item.color === colorId)
      if (check) media.map((item, key) => item.color === colorId && (media[key].thumbnail = file))
      else setMedia((pre) => [...pre, { color: colorId, thumbnail: file }])
    } else media.map((item, key) => item.color === colorId && delete media[key].thumbnail)
  }

  const handleChangeStock = (qty, sizeId, colorId) => {
    const check = stock.some((item) => item.size === sizeId && item.color === colorId)
    if (check)
      stock.map(
        (item, key) => item.size === sizeId && item.color === colorId && (stock[key].qty = qty),
      )
    else setStock((pre) => [...pre, { color: colorId, size: sizeId, qty: qty }])
  }

  const handleDeselectColor = (value) => {
    setStock(stock.filter((item) => item.color !== value))
    setGallery(gallery.filter((item) => item.colorId !== value))
    setColorData(colorData.filter((color) => color.id !== value))
    setThumbnail(thumbnail.filter((item) => item.colorId !== value))
  }

  const handleDeselectSize = (value) => {
    setStock(stock.filter((item) => item.size !== value))
    setSizeData(sizesData.filter((item) => item.id !== value))
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

  const handleFinishFormAdd = (res) => {
    setOpenForm('')
    const arr = []
    switch (openForm) {
      case 'sizes':
        arr.push({ value: res.data._id, label: res.data.name }, ...sizes)
        setSizes(arr)
        break
      case 'colors':
        arr.push({ value: res.data._id, label: res.data.name }, ...colors)
        setColors(arr)
        break
      case 'category':
        arr.push({ value: res.data._id, label: res.data.name }, ...categories)
        setCategories(arr)
        break
      default:
        break
    }
  }

  const onFinish = async (values) => {
    let check = true
    if (media.length <= 0 || media.length !== values.colors.length) check = false
    media.map((item) => (!item.thumbnail || !item?.gallery?.length) && (check = false))

    if (!check) onFinishFailed()
    else {
      const newMedia = []
      const formData = new FormData()
      // arrange files
      values.colors.map((color) => newMedia.push(media.find((med) => med.color === color)))
      newMedia.map((item) => {
        formData.append('files', item.thumbnail)
        item.gallery.map((gall) => formData.append('files', gall))
        return formData.append('media', JSON.stringify(item))
      })

      values.colors.map((color) =>
        values.sizes.map((size) =>
          formData.append(
            'stock',
            JSON.stringify(stock.find((item) => item.color === color && item.size === size)),
          ),
        ),
      )

      values.sizes.map((size) => formData.append('sizes', size))
      values.colors.map((color) => formData.append('colors', color))

      formData.append('desc', values.desc)
      formData.append('name', values.name)
      formData.append('price', values.price)
      formData.append('typeId', values.typeId)
      formData.append('barcode', values.barcode)
      formData.append('preOrder', values.preOrder)
      formData.append('salePrice', values.salePrice)
      formData.append('stylePick', values.stylePick)
      formData.append('categoryId', values.categoryId)
      formData.append('linkShopee', values.linkShopee)
      formData.append('linkLazada', values.linkLazada)
      formData.append('collectionId', values.collectionId)

      await storeProduct(formData)
        .then((res) => res.success && navigate('/dashboard/san-pham'))
        .catch((err) => console.log(err))
    }
  }

  const onFinishFailed = () => {
    Toast.warning('Vui lòng điền đủ thông tin sản phẩm!')
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
            onChange={(value) => setOpenForm(value)}
            value={openForm === '' ? null : openForm}
            options={[
              { value: 'colors', label: 'Màu Sắc' },
              { value: 'sizes', label: 'Kích Thước' },
              { value: 'category', label: 'Danh Mục' },
            ]}
          />
        </Container>
      </Top>
      <FormAdd className={openForm !== '' && 'show'}>
        <Content>
          <CloseOutlined className="btn-close" onClick={() => setOpenForm('')} />
          {openForm === 'sizes' && <StoreSize handleFinish={handleFinishFormAdd} />}
          {openForm === 'colors' && <StoreColor handleFinish={handleFinishFormAdd} />}
          {openForm === 'category' && <StoreCategory handleFinish={handleFinishFormAdd} />}
        </Content>
      </FormAdd>
      <Form
        {...configForm}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        fields={[
          { name: 'salePrice', value: '0' },
          { name: 'linkShopee', value: '' },
          { name: 'linkLazada', value: '' },
          { name: 'preOrder', value: 'false' },
          { name: 'stylePick', value: 'false' },
        ]}
      >
        <Form.Item hidden name="media" />

        {/* Category Parent */}

        <Form.Item name="typeId" label="Loại Sản Phẩm" rules={rulesNonMes}>
          <Select placeholder="Chọn loại sản phẩm" options={types} onChange={handleChangeTypes} />
        </Form.Item>

        {/* Lookbook */}

        <Form.Item label="Bộ Sưu Tập" name="collectionId">
          <Select placeholder="Chọn bộ sưu tập" options={lookbooks} />
        </Form.Item>

        {/* category */}

        <Form.Item
          name={(categories.length > 0 && 'categoryId') || null}
          label="Danh Mục"
          rules={rulesNonMes}
        >
          <Select placeholder="Chọn danh mục" options={categories || []} />
        </Form.Item>

        {/* Name */}

        <Form.Item name="name" label="Tên Sản Phẩm" rules={rulesNonMes}>
          <Input placeholder="Tên sản phẩm" />
        </Form.Item>

        {/* Color */}

        <Form.Item name="colors" label="Màu Sắc" rules={rulesNonMes}>
          <Select
            mode="multiple"
            placeholder="Chọn màu sắc"
            onSelect={(_, e) => setColorData((pre) => [...pre, { id: e.value, name: e.label }])}
            onDeselect={handleDeselectColor}
            options={colors}
          />
        </Form.Item>

        {/* Size */}

        <Form.Item name="sizes" label="Kích Thước" rules={rulesNonMes}>
          <Select
            mode="multiple"
            placeholder="Chọn kích thước"
            onSelect={(_, e) => setSizeData((pre) => [...pre, { id: e.value, name: e.label }])}
            onDeselect={handleDeselectSize}
            options={sizes}
          />
        </Form.Item>

        {/* thumbnail */}

        {colorData.length > 0 &&
          colorData.map((color) => (
            <Fragment key={color.id}>
              <Form.Item label={`Hình Ảnh Đại Diện Màu ${color.name}`} name="thumbnail">
                <Upload
                  id={`thumbnail-${color.id}`}
                  getValue={(file) => handleGetThumbnail(file, color.id)}
                />
              </Form.Item>

              <Form.Item label={`Hình Ảnh Chi Tiết Màu ${color.name}`} name="gallery">
                <Upload
                  multiple
                  id={`gallery-${color.id}`}
                  getValue={(file) => handleGetGallery(file, color.id)}
                />
              </Form.Item>
            </Fragment>
          ))}

        {/* stock */}

        {colorData.length > 0 &&
          colorData.map(
            (color) =>
              sizesData.length > 0 &&
              sizesData.map((size) => {
                return (
                  <Fragment key={`${color.id}-${size.id}`}>
                    <Form.Item
                      rules={rulesNonMes}
                      name={`${color.id}-${size.id}`}
                      label={`Số Lượng Màu ${color.name} - Size ${size.name}`}
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

        {/* sale price */}

        <Form.Item label={`Giảm Giá`} name={`salePrice`} rules={rulesNonMes}>
          <Input type="number" value="0" max="100" min="0" />
        </Form.Item>

        {/* socical */}

        <Form.Item label="Link Shopee" name="linkShopee">
          <Input />
        </Form.Item>

        <Form.Item label="Link Lazada" name="linkLazada">
          <Input />
        </Form.Item>

        <Form.Item label="Mã Vạch" name="barcode" rules={rulesNonMes}>
          <Input />
        </Form.Item>

        {/* pre order */}

        <Form.Item label="Đặt Hàng Trước" name={'preOrder'}>
          <Switch />
        </Form.Item>

        {/* Style Pick */}

        <Form.Item label="Thêm Vào Style Pick" name={'stylePick'}>
          <Switch />
        </Form.Item>

        {/* desc */}

        <Form.Item label="Mô Tả" name="desc">
          <JoditEditor tabIndex={12} className="jodit" />
        </Form.Item>

        {/* btn submit */}

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
  gap: 0.5rem;
  display: flex;
  align-items: center;
  .ant-select-selector {
    min-width: 150px;
  }
`

const FormAdd = styled.div`
  left: 0;
  top: -100%;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  display: flex;
  position: fixed;
  align-items: center;
  transition: all 0.3s;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  &.show {
    top: 0;
  }
`
const Content = styled.div`
  width: 40%;
  height: auto;
  padding: 4rem;
  position: relative;
  background-color: #fff;
  .btn-close {
    top: 0;
    right: 0;
    padding: 1rem;
    position: absolute;
    cursor: pointer;
  }
`

export default Store
