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
import { storeProduct } from 'src/services/product'

const Store = () => {
  const [types, setTypes] = useState([])
  const [lookbooks, setLookbooks] = useState([])
  const [categories, setCategories] = useState([])
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const [thumbnail, setThumbnail] = useState([])
  const [gallery, setGallery] = useState([])
  const [sizesData, setSizeData] = useState([])
  const [colorThumbnail, setColorThumbnail] = useState([])

  const [openForm, setOpenForm] = useState('')

  const [stock, setStock] = useState([])

  const onFinish = async (values) => {
    const fileThumb = []
    const fileGall = []

    // arrange image by color
    values.colors.map((color) => {
      const thumb = thumbnail.find((item) => item?.colorId === color)
      fileThumb.push(thumb)
      const gall = gallery.find((item) => item?.colorId === color)
      fileGall.push(gall)
    })

    const files = []
    const formData = new FormData()
    // append files
    fileThumb.map((thumb, key) => {
      formData.append('files', thumb.files[0])
      files.push(thumb.files[0])
      console.log('thumb', key)
      fileGall.map((gall) => {
        if (thumb.colorId === gall.colorId) {
          let lengthGall = 0
          gall.gallery.map((file) => {
            formData.append('files', file)
            files.push(file)
            lengthGall++
          })
          formData.append('lengthGall', lengthGall + 1)
        }
      })
    })

    values.sizes.map((size) => formData.append('sizes', size))
    values.colors.map((color) => formData.append('colors', color))
    values.colors.map((color) => {
      values.sizes.map((size) => {
        const qty = stock.find((item) => item.colorId === color && item.sizeId === size)
        formData.append('stock', qty.qty)
      })
    })

    formData.append('name', values.name)
    formData.append('typeId', values.typeId)
    formData.append('categoryId', values.categoryId)
    formData.append('price', values.price)
    formData.append('salePrice', values.salePrice)
    formData.append('linkShopee', values.linkShopee)
    formData.append('linkLazada', values.linkLazada)
    formData.append('barcode', values.barcode)
    formData.append('preOrder', values.preOrder)
    formData.append('stylePick', values.stylePick)
    formData.append('desc', values.desc)

    await storeProduct(formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const handleGetGallery = (files, colorId) => {
    if (files.length) {
      const check = gallery.some((item) => item.colorId === colorId)
      if (check)
        gallery.map((item, key) => item.colorId === colorId && (gallery[key].files = files))
      else setGallery((pre) => [...pre, { colorId: colorId, gallery: files }])
    } else setGallery(gallery.filter((item) => item.colorId !== colorId))
  }

  const handleGetThumbnail = (files, colorId) => {
    if (files.length) {
      const check = thumbnail.some((item) => item.colorId === colorId)
      if (check)
        thumbnail.map((item, key) => item.colorId === colorId && (thumbnail[key].files = files))
      else setThumbnail((pre) => [...pre, { colorId: colorId, files: files }])
    } else setThumbnail(thumbnail.filter((item) => item.colorId !== colorId))
  }

  const handleChangeStock = (qty, sizeId, colorId) => {
    const check = stock.some((item) => item.sizeId === sizeId && item.colorId === colorId)
    if (check)
      stock.map(
        (item, key) => item.sizeId === sizeId && item.colorId === colorId && (stock[key].qty = qty),
      )
    else setStock((pre) => [...pre, { colorId: colorId, sizeId: sizeId, qty: qty }])
  }

  const handleDeselectColor = (value) => {
    setStock(stock.filter((item) => item.colorId !== value))
    setColorThumbnail(colorThumbnail.filter((color) => color.id !== value))
    setThumbnail(thumbnail.filter((item) => item.colorId !== value))
    setGallery(gallery.filter((item) => item.colorId !== value))
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
      <Form
        {...configForm}
        onFinish={onFinish}
        fields={[
          { name: 'salePrice', value: '0' },
          { name: 'stylePick', value: 'false' },
          { name: 'preOder', value: 'false' },
        ]}
      >
        <Form.Item hidden name="media" />
        {/* Category Parent */}
        <Form.Item name="typeId" label="Loại Sản Phẩm" rules={rulesNonMes}>
          <Select placeholder="Chọn loại sản phẩm" options={types} onChange={handleChangeTypes} />
        </Form.Item>
        {/* Lookbook */}
        <Form.Item label="Bộ Sưu Tập" name="collectionId" rules={rulesNonMes}>
          <Select placeholder="Chọn bộ sưu tập" options={lookbooks} />
        </Form.Item>
        {/* category */}
        <Form.Item
          name={(categories.length > 0 && 'categoryId') || null}
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
        <Form.Item name="colors" label="Màu Sắc" rules={rulesNonMes}>
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
        <Form.Item name="sizes" label="Kích Thước" rules={rulesNonMes}>
          <Select
            mode="multiple"
            placeholder="Chọn kích thước"
            onSelect={(_, e) => setSizeData((pre) => [...pre, { id: e.value, name: e.label }])}
            onDeselect={handleDeselectSize}
            options={sizes}
          />
        </Form.Item>
        {colorThumbnail.length > 0 &&
          colorThumbnail.map((color, index) => (
            <Fragment key={color.id}>
              <Form.Item label={`Hình Ảnh Đại Diện Màu ${color.name}`} name="thumbnail">
                <Upload
                  id={`thumbnail-${color.id}`}
                  getValue={(file) => handleGetThumbnail(file, color.id)}
                />
              </Form.Item>
              <Form.Item label={`Hình Ảnh Chi Tiết Màu ${color.name}`} name="gallery">
                <Upload
                  id={`gallery-${color.id}`}
                  multiple
                  getValue={(file) => handleGetGallery(file, color.id)}
                />
              </Form.Item>
            </Fragment>
          ))}
        {colorThumbnail.length > 0 &&
          colorThumbnail.map(
            (color) =>
              sizesData.length > 0 &&
              sizesData.map((size) => {
                return (
                  <Fragment key={`${color.id}-${size.id}`}>
                    {/* stock */}
                    <Form.Item
                      label={`Số Lượng Màu ${color.name} - Size ${size.name}`}
                      name={`${color.id}-${size.id}`}
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

        <Form.Item label={`Giảm Giá`} name={`salePrice`} rules={rulesNonMes}>
          <Input type="number" value="0" max="100" min="0" />
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
