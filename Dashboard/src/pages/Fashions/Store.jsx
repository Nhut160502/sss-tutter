import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { configForm } from 'src/configs/form'
import { PropTypes } from 'prop-types'
import { storeType } from 'src/services/type'
import Toast from 'src/components/Toast'
import { useNavigate } from 'react-router-dom'

const Store = (props) => {
  const { handleFinish } = props
  const navigate = useNavigate()
  const onFinish = (values) => {
    handleFinish && console.log(values)
    storeType({ name: values.name }).then((res) => {
      if (res) {
        if (res.success) {
          Toast.success('Store tpye product successfully!')
          if (props) return handleFinish(res)
          navigate('/dashboard/loai-san-pham')
        }
        return
      }
    })
  }

  useEffect(() => {
    document.title = 'THÊM LOẠI SẢN PHẨM'
  }, [])

  return (
    <>
      <Form {...configForm} onFinish={onFinish}>
        <Form.Item
          label="Tên Loại Sản Phẩm"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên loại sản phẩm!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button style={{ width: 100 }} type="primary" htmlType="submit" className="mt-2">
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

Store.propTypes = {
  handleFinish: PropTypes.func,
}

export default Store
