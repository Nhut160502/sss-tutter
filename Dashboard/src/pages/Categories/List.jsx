import React, { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import { Link } from 'react-router-dom'
import { Top } from 'src/components/Styled'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { hiddenModal, openModal } from 'src/providers/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { deteteCategory, getCategories } from 'src/services/category'
import Modal from 'src/components/Modal'
import Toast from 'src/components/Toast'
const List = () => {
  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name, record) => <Link to={`/dashboard/danh-muc/edit/${record.slug}`}>{name}</Link>,
      key: '_id',
    },
    {
      title: 'Loại Sản Phẩm',
      dataIndex: 'type',
      key: '_id',
      render: (type) => type.name,
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
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [id, setId] = useState([])
  const loading = useSelector((state) => state?.loading)

  useEffect(() => {
    const fetchData = async () => {
      await getCategories().then((res) => setData(res.data))
    }
    fetchData()
  }, [])

  const handleOk = async () => {
    await deteteCategory(id).then((res) => {
      setData(res.data)
      Toast.success('Delete category successfully!')
      dispatch(hiddenModal())
    })
  }

  useEffect(() => {
    document.title = 'DANH SÁCH DANH MỤC'
  }, [])
  return (
    <>
      <Modal handleOk={handleOk} confirmLoading={loading} />
      <Top>
        <Button type="primary">
          <Link to="/dashboard/danh-muc/store">Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
