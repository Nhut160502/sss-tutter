import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import Upload from 'src/components/Upload'
import { configForm, rulesMesImg } from 'src/configs/form'
import { PropTypes } from 'prop-types'
import { storeLookbook } from 'src/services/lookbook'

const Store = (props) => {
  const { handleFinish } = props
  const [file, setFile] = useState({})
  const onFinish = async (values) => {
    handleFinish && console.log(values)
    values.file = file
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', values.name)
    formData.append('desc', values.desc)
    await storeLookbook(formData).then((res) => {
      res.success && (window.location = '/#/dashboard/lookbook')
    })
  }

  useEffect(() => {
    document.title = 'THÊM BỘ SƯU TẬP'
  }, [])

  return (
    <Form {...configForm} onFinish={onFinish}>
      <Form.Item
        label="Tên Bộ Sưu Tập"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên bộ sưu tập!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Hình Ảnh" name="file" rules={!file && rulesMesImg}>
        <Upload getValue={(file) => setFile(file[0])} />
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
