import { Form, Input } from 'antd'
import React from 'react'
import { configForm, rulesNonMes } from 'src/configs'

const StoreSize = () => {
  return (
    <Form {...configForm}>
      <Form.Item label="Tên Kích Thước" name="name" rules={[{ rulesNonMes }]}>
        <Input />
      </Form.Item>
    </Form>
  )
}

export default StoreSize
