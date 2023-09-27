import React from 'react'
import { Select, Form, Input, Button } from 'antd'
import { useState } from 'react'
import { configForm, rulesNonMes } from 'src/configs'

function Store() {
  const [values, setValues] = useState({})
  const onFinish = (value) => {
    setValues({ name: value.name, type: value.type })
  }
  console.log(values)
  return (
    <Form {...configForm} onFinish={onFinish}>
      <>
        <Form.Item label="Loại Kích Thước" name="type" rules={rulesNonMes}>
          <Select placeholder="Chọn loại kích thước">
            <Select.Option value="1">Size Áo</Select.Option>
            <Select.Option value="2">Size Quần</Select.Option>
            <Select.Option value="3">Khác</Select.Option>
          </Select>
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

export default Store
