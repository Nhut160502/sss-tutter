import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from 'src/components/Modal'
import { Top } from 'src/components/Styled'
import Toast from 'src/components/Toast'
import { hiddenModal, openModal } from 'src/providers/modalSlice'
import { deleteLookbook, getLookbooks } from 'src/services/lookbook'

const List = () => {
  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: '_id',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name, record) => <Link to={`/dashboard/lookbook/edit/${record.slug}`}>{name}</Link>,
    },
    {
      title: 'Tên',
      dataIndex: 'thumbnail',
      key: '_id',
      render: (url, record) => (
        <Link to={`/dashboard/lookbook/edit/${record.slug}`}>
          <img className="img-thumbnail" src={url} alt={record.name} />
        </Link>
      ),
    },
    {
      title: 'Ngày Thêm',
      dataIndex: 'createdAt',
      key: 'createdAt',
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
  const [list, setList] = useState([])
  const [id, setId] = useState()
  const loading = useSelector((state) => state?.loading)
  useEffect(() => {
    document.title = 'DANH SÁCH BỘ SƯU TẬP'

    const fetchData = async () => {
      await getLookbooks().then((res) => {
        res.success && setList(res.data)
      })
    }

    fetchData()
  }, [])

  const handleOk = async () => {
    await deleteLookbook(id).then((res) => {
      dispatch(hiddenModal())
      setList(res.data)
      Toast.success('Dử liệu đã được xoá thành công!')
    })
  }

  return (
    <>
      <Modal handleOk={handleOk} confirmLoading={loading} />
      <Top>
        <Button type="primary">
          <Link to="/dashboard/lookbook/store">Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={list} columns={columns} />
    </>
  )
}

export default List
