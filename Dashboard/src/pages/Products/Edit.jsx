import { Form, Input, Select, Switch, Button } from 'antd'
import JoditEditor from 'jodit-react'
import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Upload from 'src/components/Upload'
import { configForm, rulesNonMes } from 'src/configs/form'
import { getCategories } from 'src/services/category'
import { getColors } from 'src/services/color'
import { getLookbooks } from 'src/services/lookbook'
import { showProduct, updateProduct } from 'src/services/product'
import { getSizes } from 'src/services/size'
import { getTypes } from 'src/services/type'

const Edit = () => {
  const { slugProduct } = useParams()
  const [media, setMedia] = useState([])
  const [stock, setStock] = useState([])
  const [types, setTypes] = useState([])
  const [colors, setColors] = useState([])
  const [product, setProduct] = useState({})
  const [preview, setPreview] = useState([])
  const [sizesAPI, setSizesAPI] = useState([])
  const [sizeData, setSizeData] = useState([])
  const [lookbooks, setLookbooks] = useState([])
  const [colorData, setColorData] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const setData = (data, call) =>
        data.map((item) => call((pre) => [...pre, { value: item._id, label: item.name }]))
      try {
        const { data } = await showProduct(slugProduct)
        const type = await getTypes()
        const lookbook = await getLookbooks()
        const category = await getCategories()
        const color = await getColors()
        const size = await getSizes()
        setTypes([])
        setSizesAPI([])
        setColors([])
        setLookbooks([])
        setCategories([])

        setProduct(data)
        setPreview(data.media)
        setStock(data.stock)
        setColorData(data.colors)
        setSizeData(data.sizes)

        setData(type.data, setTypes)
        setData(size.data, setSizesAPI)
        setData(color.data, setColors)
        setData(lookbook.data, setLookbooks)
        setData(category.data, setCategories)
      } catch (error) {}
    }

    fetchData()
  }, [slugProduct])

  const handleSetThumbnail = (files, colorId) => {
    if (files) {
      const file = files[0]
      const check = media.some((item) => item.color === colorId)
      if (check) media.map((item, key) => item.color === colorId && (media[key].thumbnail = file))
      else setMedia((pre) => [...pre, { color: colorId, thumbnail: file }])
    } else media.map((item, key) => item.color === colorId && delete media[key].thumbnail)
  }

  const handleSetGallery = (files, colorId) => {
    if (files.length > 0) {
      const check = media.some((item) => item.color === colorId)
      if (check) media.map((item, key) => item.color === colorId && (media[key].gallery = files))
      else setMedia((pre) => [...pre, { color: colorId, gallery: files }])
    } else media.map((item, key) => item.color === colorId && delete media[key].gallery)
  }

  const handleSelectColor = (_, e) => {
    setPreview((pre) => [...pre, { color: { _id: e.value, name: e.label } }])
    setColorData((pre) => [...pre, _])
    const getSize = []
    stock.map((item) =>
      getSize.some((size) => size._id !== item.size._id && getSize.push(item.size)),
    )

    console.log(getSize)

    // getSize.map((item) =>
    //   setStock((pre) => [
    //     ...pre,
    //     { color: { _id: e.value, name: e.label }, size: { _id: item._id, name: item.name } },
    //   ]),
    // )
  }

  const handleDeselectedColor = (id) => {
    setPreview(preview.filter((item) => item.color._id !== id))
    setStock(stock.filter((item) => item.color._id !== id))
    setColorData(colorData.filter((item) => item !== id))
  }

  const handleDeselectedSize = (id) => {
    setStock(stock.filter((item) => item.size._id !== id))
    setSizeData(sizeData.filter((item) => item !== id))
  }

  const onFinish = async (values) => {
    const newStock = []
    const newMedia = []
    const oldMedia = []

    stock.map((item) =>
      newStock.push({ color: item.color._id, size: item.size._id, qty: item.qty }),
    )

    media.map((med) => {
      if (med.thumbnail) oldMedia.push(preview.find((pre) => pre.color._id === med.color).thumbnail)
      if (med.gallery.length && med.gallery.length > 0) {
        const gallery = preview.find((pre) => pre.color._id === med.color).gallery
        gallery.map((item) => oldMedia.push(item))
      }
    })

    const formData = new FormData()

    if (oldMedia.length > 0)
      oldMedia.map((item) => formData.append('oldMedia', JSON.stringify(item)))
    if (media.length > 0) {
      values.colors.map((color) => newMedia.push(media.find((item) => item.color === color)))
      values.colors.map((color) => newMedia.push(media.find((item) => item.color === color)))
      newMedia.map((item) => formData.append('media', JSON.stringify(item)))
    }
    newStock.map((item) => formData.append('stock', JSON.stringify(item)))

    formData.append('name', values.name)
    formData.append('desc', values.desc)
    formData.append('price', values.price)
    formData.append('typeId', values.typeId)
    formData.append('preOrder', values.preOrder)
    formData.append('stylePick', values.stylePick)
    formData.append('salePrice', values.salePrice)
    formData.append('categoryId', values.categoryId)
    formData.append('linkLazada', values.linkLazada)
    formData.append('linkShopee', values.linkShopee)
    formData.append('collectionId', values.collectionId)
    values.sizes.map((size) => formData.append('sizes', size))
    values.colors.map((color) => formData.append('colors', color))

    await updateProduct(product._id, formData).then((res) => console.log(res))
  }
  return (
    <Form
      {...configForm}
      onFinish={onFinish}
      fields={[
        { name: 'name', value: product?.name },
        { name: 'typeId', value: product?.type?._id },
        { name: 'collectionId', value: product?.collections?._id },
        { name: 'categoryId', value: product?.category?._id },
        { name: 'colors', value: colorData },
        { name: 'sizes', value: sizeData },
        { name: 'price', value: product?.price },
        { name: 'salePrice', value: product?.salePrice },
        { name: 'linkShopee', value: product?.linkShopee },
        { name: 'linkLazada', value: product?.linkLazada },
        { name: 'barcode', value: product?.barcode },
        { name: 'preOrder', value: product?.preOrder },
        { name: 'stylePick', value: product?.stylePick },
        { name: 'desc', value: product?.desc || '' },
        //
      ]}
    >
      <Form.Item name="typeId" label="Loại Sản Phẩm" rules={rulesNonMes}>
        <Select placeholder="Chọn loại sản phẩm" options={types} />
      </Form.Item>

      <Form.Item name="collectionId" label="Chọn Bộ Sưu Tập">
        <Select placeholder="Chọn bộ sưu tập" options={lookbooks} />
      </Form.Item>

      <Form.Item name="categoryId" label="Danh Mục" rules={rulesNonMes}>
        <Select placeholder="Chọn danh mục" options={categories} />
      </Form.Item>

      <Form.Item name="name" label="Tên Sản Phẩm" rules={rulesNonMes}>
        <Input />
      </Form.Item>

      <Form.Item name="colors" label="Màu Sắc" rules={rulesNonMes}>
        <Select
          mode="multiple"
          options={colors}
          placeholder="Chọn màu sắc"
          onDeselect={handleDeselectedColor}
          onSelect={handleSelectColor}
        />
      </Form.Item>

      <Form.Item name="sizes" label="Kích Thước" rules={rulesNonMes}>
        <Select
          placeholder="Chọn kích thước"
          options={sizesAPI}
          mode="multiple"
          onDeselect={handleDeselectedSize}
        />
      </Form.Item>

      {preview.map((item) => {
        let data = []
        if (item.thumbnail) data.push(item.thumbnail)
        else data = null
        return (
          <Fragment key={item._id}>
            <Form.Item label={`Hình Ảnh Đại Diện Màu ${item?.color?.name}`} name="thumbnail">
              <Upload
                data={data}
                id={`thumbnail-${item?._id}`}
                getValue={(files) => handleSetThumbnail(files, item?.color?._id)}
              />
            </Form.Item>

            <Form.Item label={`Hình Ảnh Chi Tiết Màu ${item?.color?.name}`} name="gallery">
              <Upload
                multiple
                data={item.gallery}
                id={`gallery-${item._id}`}
                getValue={(files) => handleSetGallery(files, item?.color?._id)}
              />
            </Form.Item>
          </Fragment>
        )
      })}
      {stock.map((item) => (
        <Fragment key={`${item?._id}`}>
          <Form.Item
            rules={rulesNonMes}
            label={`Số Lượng Màu ${item?.color?.name} - Size ${item?.size?.name}`}
          >
            <Input type="number" value={item?.qty} />
          </Form.Item>
        </Fragment>
      ))}

      <Form.Item name="price" label="Giá Sản Phẩm" rules={rulesNonMes}>
        <Input type="number" />
      </Form.Item>

      <Form.Item name="salePrice" label="Giảm Giá" rules={rulesNonMes}>
        <Input type="number" />
      </Form.Item>

      <Form.Item name="linkShopee" label="Link Shopee">
        <Input />
      </Form.Item>

      <Form.Item name="linkLazada" label="Link Lazada">
        <Input />
      </Form.Item>

      <Form.Item name="barcode" label="Mã Vạch">
        <Input />
      </Form.Item>

      <Form.Item label="Đặt Hàng Trước" name={'preOrder'}>
        <Switch />
      </Form.Item>

      <Form.Item label="Thêm Vào Style Pick" name={'stylePick'}>
        <Switch />
      </Form.Item>

      <Form.Item label="Mô Tả" name="desc">
        <JoditEditor tabIndex={12} className="jodit" value={product?.desc} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit" type="primary">
          Thêm
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Edit
