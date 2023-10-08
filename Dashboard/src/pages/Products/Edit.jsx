import { Form, Input, Select, Switch, Button } from 'antd'
import JoditEditor from 'jodit-react'
import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Upload from 'src/components/Upload'
import { configForm, rulesNonMes } from 'src/configs/form'
import { getCategories } from 'src/services/category'
import { getColors } from 'src/services/color'
import { getLookbooks } from 'src/services/lookbook'
import { showProduct, updateProduct } from 'src/services/product'
import { getSizes } from 'src/services/size'
import { getTypes } from 'src/services/type'

const Edit = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const { slugProduct } = useParams()
  const [media, setMedia] = useState([])
  const [stock, setStock] = useState([])
  const [types, setTypes] = useState([])
  const [product, setProduct] = useState({})
  const [oldMedia, setOldMedia] = useState([])
  const [sizesAPI, setSizesAPI] = useState([])
  const [sizeData, setSizeData] = useState([])
  const [colorsAPI, setColorsAPI] = useState([])
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
        setStock([])
        setMedia([])
        setProduct([])
        setSizeData([])
        setSizesAPI([])
        setLookbooks([])
        setColorsAPI([])
        setCategories([])
        setColorData([])

        setProduct(data)
        setStock(data.stock)
        setMedia(data.media)
        setSizeData(data.sizes)
        setColorData(data.colors)

        setData(type.data, setTypes)
        setData(size.data, setSizesAPI)
        setData(color.data, setColorsAPI)
        setData(lookbook.data, setLookbooks)
        setData(category.data, setCategories)

        data.stock.map((item) => {
          const name = `${item.color._id}-${item.size._id}`
          return form.setFieldsValue({
            [name]: item.qty,
          })
        })
      } catch (error) {}
    }

    fetchData()
  }, [slugProduct, form])

  const handleSetThumbnail = (files, color) => {
    if (files) {
      const file = files[0]
      const check = media.some((item) => item.color._id === color._id)
      if (check) {
        media.some((item) => item.color._id === color._id && typeof item.thumbnail === 'string') &&
          setOldMedia((pre) => [
            ...pre,
            media.find((item) => item.color._id === color._id && typeof item.thumbnail === 'string')
              .thumbnail,
          ])

        media.map((item, key) => item.color._id === color._id && (media[key].thumbnail = file))
      } else
        setMedia((pre) => [
          ...pre,
          { color: { _id: color._id, name: color.name }, thumbnail: file },
        ])
    } else media.map((item, key) => item.color._id === color._id && delete media[key].thumbnail)
  }

  const handleSetGallery = (files, color) => {
    if (files.length > 0) {
      const check = media.some((item) => item.color._id === color._id)
      if (check) {
        media.map(
          (item) =>
            item.color._id === color._id &&
            item?.gallery?.map(
              (gall) => typeof gall === 'string' && setOldMedia((pre) => [...pre, gall]),
            ),
        )
        media.map((item, key) => item.color._id === color._id && (media[key].gallery = files))
      } else
        setMedia((pre) => [...pre, { color: { _id: color._id, name: color.name }, gallery: files }])
    } else media.map((item, key) => item.color._id === color._id && delete media[key].gallery)
  }

  const handleSelectColor = (_, e) => {
    const arr = []
    if (product.colors.some((color) => color === e.value)) {
      setMedia((pre) => [...pre, product.media.find((item) => item.color._id === e.value)])
      product.media.map(
        (item) =>
          item.color._id === e.value &&
          arr.push(item.thumbnail) &&
          item.gallery.map((gall) => arr.push(gall)),
      )

      oldMedia.map(
        (old, index) => arr.some((item) => item === old) && setOldMedia(delete oldMedia[index]),
      )
    } else setMedia((pre) => [...pre, { color: { _id: e.value, name: e.label } }])

    setColorData((pre) => [...pre, e.value])
    sizeData.map((size) => {
      if (!product.colors.some((item) => item === e.value))
        form.setFieldsValue({
          [`${e.value}-${size}`]: '',
        })
      if (product.colors.some((item) => item === e.value)) {
        product.media.map(
          (item) =>
            item.color._id === e.value &&
            item.gallery.map((gall) => setOldMedia(oldMedia.filter((item) => item !== gall))) &&
            setOldMedia(oldMedia.filter((item) => item !== item.thumbnail)),
        )
      }
      const name = sizesAPI.find((item) => item.value === size).label
      return setStock((pre) => [
        ...pre,
        {
          color: { _id: _, name: e.label },
          size: { _id: size, name: name },
        },
      ])
    })
  }

  const handleSelectSize = (_, e) => {
    setSizeData((pre) => [...pre, _])
    colorData.map((color) => {
      if (!product.sizes.some((item) => item === e.value))
        form.setFieldsValue({
          [`${color}-${e.value}`]: '',
        })

      const name = colorsAPI.find((item) => item.value === color).label

      return setStock((pre) => [
        ...pre,
        {
          color: { _id: color, name: name },
          size: { _id: _, name: e.label },
        },
      ])
    })
  }

  const handleDeselectedColor = (id) => {
    media.map((item) => {
      if (item.color._id === id) {
        item?.gallery?.map(
          (gall) => typeof gall === 'string' && setOldMedia((pre) => [...pre, gall]),
        )
        typeof item?.thumbnail === 'string' && setOldMedia((pre) => [...pre, item.thumbnail])
      }
    })
    setMedia(media.filter((item) => item.color._id !== id))
    setColorData(colorData.filter((item) => item !== id))
    setStock(stock.filter((item) => item.color._id !== id))
  }

  const handleDeselectedSize = (id) => {
    setSizeData(sizeData.filter((item) => item !== id))
    setStock(stock.filter((item) => item.size._id !== id))
  }

  const handleSetStock = (value, coloId, sizeId) => {
    stock.find(
      (item) => item.color._id === coloId && item.size._id === sizeId && (item.qty = value),
    )
  }

  const onFinish = async (values) => {
    const newStock = []
    const newMedia = []
    const formData = new FormData()

    colorData.map((color) =>
      sizeData.map((size) => {
        const value = stock.find((item) => item.color._id === color && item.size._id === size)
        return (
          value &&
          newStock.push({
            color: color,
            size: size,
            qty: Number(value.qty),
          })
        )
      }),
    )

    media.map((item) =>
      newMedia.push({ color: item.color._id, thumbnail: item.thumbnail, gallery: item.gallery }),
    )

    newMedia.map((item) => {
      formData.append('files', item.thumbnail)
      item?.gallery?.map((file) => formData.append('files', file))
      return formData.append('media', JSON.stringify(item))
    })

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
    newStock.map((item) => formData.append('stock', JSON.stringify(item)))
    oldMedia.map((item) => formData.append('oldMedia', item))

    await updateProduct(product._id, formData).then((res) => navigate('/dashboard/san-pham'))
  }

  console.log(oldMedia)

  return (
    <Form
      form={form}
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
        { name: 'desc', value: product?.desc },
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
          options={colorsAPI}
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
          onSelect={handleSelectSize}
          onDeselect={(e) => handleDeselectedSize(e)}
        />
      </Form.Item>

      {media.map((item) => {
        let data = []
        if (item.thumbnail) data.push(item.thumbnail)
        else data = null
        return (
          <Fragment key={item?.color?._id}>
            <Form.Item label={`Hình Ảnh Đại Diện Màu ${item?.color?.name}`} name="thumbnail">
              <Upload
                data={data}
                id={`thumbnail-${item?._id}`}
                getValue={(files) => handleSetThumbnail(files, item?.color)}
              />
            </Form.Item>

            <Form.Item label={`Hình Ảnh Chi Tiết Màu ${item?.color?.name}`} name="gallery">
              <Upload
                multiple
                data={item.gallery}
                id={`gallery-${item._id}`}
                getValue={(files) => handleSetGallery(files, item?.color)}
              />
            </Form.Item>
          </Fragment>
        )
      })}
      {stock.map((item) => (
        <Form.Item
          key={`${item?.color._id}-${item?.size?._id}`}
          name={`${item?.color._id}-${item?.size?._id}`}
          rules={rulesNonMes}
          label={`Số Lượng Màu ${item?.color?.name} - Size ${item?.size?.name}`}
        >
          <Input
            type="number"
            onChange={(e) => {
              handleSetStock(e.target.value, item.color._id, item.size._id)
            }}
          />
        </Form.Item>
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
        <JoditEditor tabIndex={12} className="jodit" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit" type="primary">
          Cập Nhật
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Edit
