import { Button, Form, Input, Select, Space } from 'antd'
import React, { useEffect } from 'react'
import { configForm } from 'src/configs'
import { PropTypes } from 'prop-types'

const Store = (props) => {
  const { handleFinish } = props
  const onFinish = (value) => {
    handleFinish && console.log(value)
  }
  const onFinishFailed = () => {}

  useEffect(() => {
    document.title = 'THÊM DANH MỤC'
  }, [])
  return (
    <Form {...configForm} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="name"
        label="Tên Danh Mục"
        rules={[{ required: true, message: 'Vui lòng nhập tên danh mục!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="categoryParent"
        label="Loại Sản Phẩm"
        rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm!' }]}
      >
        <Select mode="multiple" placeholder="Chọn loại sản phẩm" optionLabelProp="label">
          <Select.Option value="china" label="China">
            <Space>
              <span role="img" aria-label="China">
                🇨🇳
              </span>
              China (中国)
            </Space>
          </Select.Option>
          <Select.Option value="usa" label="USA">
            <Space>
              <span role="img" aria-label="USA">
                🇺🇸
              </span>
              USA (美国)
            </Space>
          </Select.Option>
          <Select.Option value="japan" label="Japan">
            <Space>
              <span role="img" aria-label="Japan">
                🇯🇵
              </span>
              Japan (日本)
            </Space>
          </Select.Option>
          <Select.Option value="korea" label="Korea">
            <Space>
              <span role="img" aria-label="Korea">
                🇰🇷
              </span>
              Korea (韩国)
            </Space>
          </Select.Option>
        </Select>
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
