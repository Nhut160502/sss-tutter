import React, { useEffect, useState } from 'react'
import { configForm, rulesNonMes } from 'src/configs/form'
import { Button, Form, Input, Select } from 'antd'
import Toast from 'src/components/Toast'
import { useNavigate, useParams } from 'react-router-dom'
import { showSize, updateSize } from 'src/services/size'
function Edit() {
  const navigate = useNavigate()
  const { slugSize } = useParams()
  const [data, setData] = useState({})

  const onFinish = async (values) => {
    try {
      const res = await updateSize(values)
      if (res.success) {
        Toast.success('Update size successfully!')
        navigate('/dashboard/sizes')
      }
    } catch (error) {
      Toast.error('Update size error!')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      showSize(slugSize).then((res) => {
        setData(res.data)
      })
    }
    fetchData()
  }, [slugSize])

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
          name: 'type',
          value: data?.type + '',
        },
      ]}
    >
      <Form.Item hidden name="id" />
      <Form.Item label="Loại Kích Thước" name="type" rules={rulesNonMes}>
        <Select
          placeholder="Chọn loại kích thước"
          options={[
            { value: '1', label: 'Size Áo' },
            { value: '2', label: 'Size Quần' },
            { value: '3', label: 'Khác' },
          ]}
        />
      </Form.Item>
      <Form.Item label="Tên kích thước" name="name" rules={rulesNonMes}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button htmlType="submit" type="primary">
          Cập Nhật
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Edit
