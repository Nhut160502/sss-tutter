import { Button, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { configForm } from 'src/configs/form'
import { PropTypes } from 'prop-types'
import { getTypes } from 'src/services/type'
import Toast from 'src/components/Toast'
import { useNavigate } from 'react-router-dom'
import { storeCategory } from 'src/services/category'
const Store = (props) => {
  const { handleFinish } = props
  const navigate = useNavigate()
  const [data, setData] = useState([])

  const onFinish = async (values) => {
    handleFinish && console.log(values)
    await storeCategory(values)
      .then((res) => {
        if (res.success) {
          Toast.success('Store category successfully!')
          if (props) return handleFinish(res)
          navigate('/dashboard/category')
        }
      })
      .catch((err) => Toast.error('Error!'))
  }

  useEffect(() => {
    const fetchData = async () => {
      await getTypes()
        .then((res) => setData(res.data))
        .catch(() => {
          Toast.error('Eorror!')
          navigate(-1)
        })
    }
    fetchData()
  }, [navigate])

  useEffect(() => {
    document.title = 'THÊM DANH MỤC'
  }, [])

  return (
    <Form {...configForm} onFinish={onFinish}>
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
          {data?.map((item) => (
            <Select.Option key={item._id} value={item._id} label={item.name}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ width: 100 }} type="primary" htmlType="submit" className="mt-2">
          Thêm
        </Button>
      </Form.Item>
    </Form>
  )
}

Store.propTypes = {
  handleFinish: PropTypes.func,
}

export default Store
