import React, { useEffect, useState } from 'react'
import { Table, Button, Space } from 'antd'
import { Link } from 'react-router-dom'
import { Top } from 'src/components/Styled'
import { getProducts } from 'src/services/product'
import { openModal } from 'src/providers/modalSlice'
import { useDispatch } from 'react-redux'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import Modal from 'src/components/Modal'

const List = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text) => <Link>{text}</Link>,
    },
    {
      title: 'Loại Sản Phẩm',
      dataIndex: 'type',
      sorter: (a, b) => a.age - b.age,
      render: (type) => type?.name,
    },
    {
      title: 'Bộ Sưu Tập',
      dataIndex: 'collection',
      sorter: (a, b) => a.age - b.age,
      render: (collection) => collection?.name,
    },
    {
      title: 'Danh Mục',
      dataIndex: 'type',
      sorter: (a, b) => a.age - b.age,
      render: (category) => category?.name,
    },
    {
      title: 'Ngày Thêm',
      dataIndex: 'createdAt',
      key: '_id',
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'status',
      key: '_id',
      render: (status) =>
        status === true ? (
          <EyeOutlined className="icon-active" />
        ) : (
          <EyeInvisibleOutlined className="icon-active" />
        ),
    },
    {
      title: 'Action',
      key: '_id',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/dashboard/loai-san-pham/edit/${record.slug}`}>Sửa</Link>
          <Link
            onClick={() => {
              dispatch(openModal())
              setId(record._id)
            }}
          >
            Xóa
          </Link>
        </Space>
      ),
    },
  ]

  const [data, setData] = useState([])
  const [id, setId] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      await getProducts().then((res) => {
        setData(res.data)
      })
    }
    fetchData()
  }, [])

  const handleOk = () => {
    console.log(id)
  }

  useEffect(() => {
    document.title = 'DANH SÁCH SẢN PHẨM'
  }, [])
  return (
    <>
      <Modal handleOk={handleOk} />
      <Top>
        <Button type="primary">
          <Link to="/dashboard/san-pham/store">Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
