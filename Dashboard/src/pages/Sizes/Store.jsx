import React from 'react'
import { Select, Form, Input, Button } from 'antd'
import { configForm, rulesNonMes } from 'src/configs/form'
import { PropTypes } from 'prop-types'
import { storeSize } from 'src/services/size'
import Toast from 'src/components/Toast'
import { useNavigate } from 'react-router-dom'

function Store(props) {
  const { handleFinish } = props
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      await storeSize(values).then((res) => {
        if (res.success) {
          Toast.success('Store size successfully!')
          if (props) {
            handleFinish(res)
          } else {
            navigate('/dashboard/sizes')
          }
        }
      })
    } catch (error) {
      Toast.error('Store size error!')
    }
  }

  return (
    <Form {...configForm} onFinish={onFinish}>
      <>
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
            Thêm
          </Button>
        </Form.Item>
      </>
    </Form>
  )
}

Store.propTypes = {
  handleFinish: PropTypes.func,
}

export default Store
