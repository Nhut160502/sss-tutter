import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import Upload from 'src/components/Upload'
import { configForm, rulesMesImg } from 'src/configs/form'
import { storeLookbook } from 'src/services/lookbook'
import { useNavigate } from 'react-router-dom'

const Store = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState({})
  const onFinish = async (values) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', values.name)
    formData.append('desc', values.desc)
    await storeLookbook(formData).then((res) => {
      res.success && navigate('/dashboard/lookbook')
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
export default Store
