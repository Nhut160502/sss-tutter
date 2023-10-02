import { Button, Form, Input, Switch } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { showType, updateType } from 'src/services/type'

const Edit = () => {
  const navigate = useNavigate()
  const { slugFashion } = useParams()
  const [checked, setChecked] = useState(true)
  const [data, setData] = useState({})

  const onFinish = async (values) => {
    console.log(values)
    await updateType(data._id, values).then((res) => {
      console.log(res)
      if (res.success) {
        navigate('/dashboard/loai-san-pham')
      }
    })
  }

  const fetchData = async (slug) => {
    await showType(slug).then((res) => {
      if (res.data) {
        setData(res.data)
        setChecked(res.data.status)
      }
    })
  }

  useEffect(() => {
    fetchData(slugFashion)
  }, [slugFashion])

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 800 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      fields={[
        {
          name: 'name',
          value: data.name,
        },
        {
          name: 'status',
          value: checked,
        },
      ]}
    >
      <Form.Item
        label="Tên Loại Sản Phẩm"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên loại sản phẩm!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Trạng Thái" name="status">
        <Switch
          checked={checked}
          checkedChildren="Hiển Thị"
          unCheckedChildren="Ẩn"
          onChange={() => setChecked(!checked)}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ width: 100 }} type="primary" htmlType="submit" className="mt-2">
          Cập Nhật
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Edit
