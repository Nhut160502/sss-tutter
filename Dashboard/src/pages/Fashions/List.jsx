import React, { memo, useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import { Link } from 'react-router-dom'
// import { clt } from '../../configs/table'
import { Top } from 'src/components/Styled'
import { deleteType, getTypes } from 'src/services/type'
import { useDispatch, useSelector } from 'react-redux'
import { hiddenModal, openModal } from 'src/providers/modalSlice'
import Modal from 'src/components/Modal'
import Toast from 'src/components/Toast'
const List = () => {
  const columns = [
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
          <Link to={record.slug}>Sửa</Link>
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
    document.title = 'DANH SÁCH LOẠI SẢN PHẨM'
    getTypes().then((res) => setList(res.data))
  }, [])

  const handleOk = async () => {
    var formData = new FormData()
    formData.append('id', id)
    console.log(formData)
    // await deleteType(formData).then((res) => {
    //   dispatch(hiddenModal())
    //   setList(res.data)
    //   Toast.success('Dử liệu đã được xoá thành công!')
    // })
  }

  return (
    <>
      <Modal handleOk={handleOk} confirmLoading={loading} />
      <Top>
        <Button type="primary">
          <Link to="/dashboard/loai-san-pham/store">Thêm Mới</Link>
        </Button>
      </Top>
      <Table
        columns={columns}
        rowKey="_id"
        dataSource={list}
        onChange={() => console.log('Change')}
      />
    </>
  )
}

export default memo(List)
