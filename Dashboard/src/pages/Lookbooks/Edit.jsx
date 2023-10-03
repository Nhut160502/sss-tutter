import { Button, Form, Input, Switch } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Toast from 'src/components/Toast'
import Upload from 'src/components/Upload'
import { configForm } from 'src/configs/form'
import { showLookbook, updateLookbook } from 'src/services/lookbook'

const Edit = () => {
  const { slugLookbook } = useParams()
  const navigate = useNavigate()
  const [file, setFile] = useState()
  const [data, setData] = useState({})
  const [checked, setChecked] = useState()
  const onFinish = async (values) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', values.name)
    formData.append('id', data._id)
    formData.append('desc', values.desc)
    formData.append('status', values.status)
    await updateLookbook(formData)
      .then((res) => {
        if (!res.success) {
          Toast.error('Error')
        } else {
          Toast.success('Update collection successfully!')
          navigate('/dashboard/lookbook')
        }
      })
      .catch((err) => Toast.error('Error'))
  }

  useEffect(() => {
    showLookbook(slugLookbook).then((res) => {
      setData(res.data)
      setChecked(res.data.status)
    })
  }, [slugLookbook])
  return (
    <Form
      {...configForm}
      onFinish={onFinish}
      fields={[
        {
          name: 'name',
          value: data.name,
        },
        {
          name: 'desc',
          value: data.desc,
        },
        {
          name: 'status',
          value: checked,
        },
      ]}
    >
      <Form.Item
        label="Tên Bộ Sưu Tập"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên bộ sưu tập!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Hình Ảnh" name="file">
        <Upload getValue={(file) => setFile(file[0])} data={[data.thumbnail]} />
      </Form.Item>
      <Form.Item
        label="Miêu Tả Ngắn"
        name="desc"
        rules={[{ required: true, message: 'Vui lòng nhập miêu tả!' }]}
      >
        <Input.TextArea rows={6} />
      </Form.Item>
      <Form.Item label="Trạng Thái" name="status">
        <Switch
          checked={checked}
          checkedChildren="Hiển Thị"
          unCheckedChildren="Ẩn"
          onChange={() => setChecked(!checked)}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ width: 100 }} type="primary" htmlType="submit" className="mt-2">
          Cập Nhật
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Edit
