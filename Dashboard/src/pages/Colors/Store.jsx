import React, { useState } from 'react'
import { configForm, rulesNonMes } from 'src/configs'
import { Button, ColorPicker, Form, Input } from 'antd'

function Store() {
  const [values, setValues] = useState({})

  const onFinish = (value) => {
    const { r, g, b, a } = value?.code?.metaColor
    const colorCode = `${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${Math.round(a)}`
    setValues({ name: value.name, code: colorCode })
  }

  const onFinishFailed = () => {}

  console.log(values)

  return (
    <Form {...configForm} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item label="Tên Màu Sắc" name="name" rules={rulesNonMes}>
        <Input />
      </Form.Item>
      <Form.Item label="Mã Màu" name="code" rules={rulesNonMes}>
        <ColorPicker showText />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button htmlType="submit" type="primary">
          Thêm
        </Button>
      </Form.Item>
    </Form>
  )
}
export default Store
