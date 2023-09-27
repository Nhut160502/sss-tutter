import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import Upload from 'src/components/Upload'
import { configForm } from 'src/configs'
import { PropTypes } from 'prop-types'

const Store = (props) => {
  const { handleFinish } = props
  const [files, setFiles] = useState([])
  const onFinish = (values) => {
    handleFinish && console.log(values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  }

  useEffect(() => {
    document.title = 'THÊM BỘ SƯU TẬP'
  }, [])

  console.log(files)

  return (
    <Form {...configForm} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Tên Bộ Sưu Tập"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên bộ sưu tập!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Hình Ảnh"
        name="image"
        rules={[{ required: true, message: 'Vui lòng chọn hình ảnh!' }]}
      >
        <Upload getValue={(value) => setFiles(value)} />
      </Form.Item>
      <Form.Item
        label="Miêu Tả Ngắn"
        name="desc"
        rules={[{ required: true, message: 'Vui lòng nhập miêu tả!' }]}
      >
        <Input.TextArea rows={6} />
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
