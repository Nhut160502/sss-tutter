import { Form, Input, Select, Button, Switch } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Toast from 'src/components/Toast'
import { configForm } from 'src/configs/form'
import { showCategory, updateCategory } from 'src/services/category'
import { getTypes } from 'src/services/type'

const Edit = () => {
  const { slugCategory } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const [list, setList] = useState([])
  const onFinish = async (values) => {
    const formData = new FormData()
    formData.append('id', values._id)
    formData.append('name', values.name)
    formData.append('desc', values.desc)
    formData.append('status', values.status)

    await updateCategory(values)
      .then((res) => {
        Toast.success('Update category successfully!')
        navigate(-1)
      })
      .catch((err) => Toast.error('Error'))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cat = await showCategory(slugCategory)
        const type = await getTypes()
        setData(cat.data)
        setList(type.data)
      } catch (error) {
        Toast.error('Error!')
        navigate(-1)
      }
    }
    fetchData()
  }, [slugCategory, navigate])

  return (
    <Form
      {...configForm}
      onFinish={onFinish}
      fields={[
        {
          name: 'id',
          value: data?._id,
        },
        {
          name: 'name',
          value: data?.name,
        },
        {
          name: 'typeId',
          value: data?.type?._id,
        },
        {
          name: 'status',
          value: data?.status,
        },
      ]}
    >
      <Form.Item hidden name="id" />
      <Form.Item
        name="name"
        label="Tên Danh Mục"
        rules={[{ required: true, message: 'Vui lòng nhập tên danh mục!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="typeId"
        label="Loại Sản Phẩm"
        rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm!' }]}
      >
        <Select placeholder="Chọn loại sản phẩm" optionLabelProp="label">
          {list?.map((item) => (
            <Select.Option key={item._id} value={item._id} label={item.name}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Trạng Thái" name="status">
        <Switch checkedChildren="Hiển Thị" unCheckedChildren="Ẩn" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ width: 100 }} type="primary" htmlType="submit" className="mt-2">
          Thêm
        </Button>
      </Form.Item>
    </Form>
  )
}

export default memo(Edit)
