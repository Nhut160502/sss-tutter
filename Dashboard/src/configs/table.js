import { Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { openModal } from 'src/providers/modalSlice'
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

export const clt = {
  columns: [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: '_id',
      render: (name, record) => <Link to={record.slug}>{name}</Link>,
    },
    {
      title: 'Ngày Thêm',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: '_id',
      render: (_, record) => (
        <Space size="middle">
          <Link to={record._id}>Sửa</Link>
          <Link onClick={clt.handleDelete}>Xóa</Link>
        </Space>
      ),
    },
  ],
  handleDelete: () => {},
}
export const columnsType = [
  {
    title: 'Tên',
    dataIndex: 'name',
    key: '_id',
    render: (name, record) => <Link to={record.slug}>{name}</Link>,
  },
  {
    title: 'Ngày Thêm',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Action',
    key: '_id',
    render: (_, record) => (
      <Space size="middle">
        <Link to={record._id}>Sửa</Link>
        <Link
          onClick={() => {
            const dispatch = useDispatch()
            dispatch(openModal)
          }}
        >
          Xóa
        </Link>
      </Space>
    ),
  },
]
