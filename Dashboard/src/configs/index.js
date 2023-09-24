import React from 'react'
import { Link } from 'react-router-dom'
export const configForm = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  style: { maxWidth: 800 },
  initialValues: { remember: true },
  autoComplete: 'off',
}

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    render: (text) => <Link>{text}</Link>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
  },
]
export const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

export const rulesNonMes = [
  {
    required: true,
    message: '',
  },
]

export const rulesMesImg = [
  {
    required: true,
    message: 'Vui lòng thêm hình ảnh!',
  },
]
