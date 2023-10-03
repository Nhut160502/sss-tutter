import React, { useEffect, useState } from 'react'
import { configForm, rulesNonMes } from 'src/configs/form'
import { Button, ColorPicker, Form, Input } from 'antd'
import { showColor, updateColor } from 'src/services/color'
import Toast from 'src/components/Toast'
import { useNavigate, useParams } from 'react-router-dom'
function Edit() {
  const navigate = useNavigate()
  const { slugColor } = useParams()
  const [data, setData] = useState([])

  const onFinish = async (values) => {
    if (values.code.metaColor) {
      const { r, g, b, a } = values?.code?.metaColor
      const colorCode = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${Math.round(
        a,
      )})`
      values.code = colorCode
    }

    try {
      const res = await updateColor(values)
      if (res.success) {
        Toast.success('Update color successfully!')
        navigate('/dashboard/colors')
      }
    } catch (error) {
      Toast.error('Update color error!')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      showColor(slugColor).then((res) => {
        setData(res.data)
      })
    }
    fetchData()
  }, [slugColor])

  return (
    <Form
      {...configForm}
      onFinish={onFinish}
      fields={[
        {
          name: 'id',
          value: data?._id,
        },
        {
          name: 'name',
          value: data?.name,
        },
        {
          name: 'code',
          value: data?.code,
        },
      ]}
    >
      <Form.Item hidden name="id" />
      <Form.Item label="Tên Màu Sắc" name="name" rules={rulesNonMes}>
        <Input />
      </Form.Item>
      <Form.Item label="Mã Màu" name="code" rules={rulesNonMes}>
        <ColorPicker showText format="rgb" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button htmlType="submit" type="primary">
          Cập Nhật
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Edit
