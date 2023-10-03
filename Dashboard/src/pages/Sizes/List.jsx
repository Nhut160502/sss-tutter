import React, { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import { Link } from 'react-router-dom'
import { Top } from 'src/components/Styled'
import Modal from 'src/components/Modal'
import { useDispatch } from 'react-redux'
import { hiddenModal, openModal } from 'src/providers/modalSlice'
import Toast from 'src/components/Toast'
import { deteteSize, getSizes } from 'src/services/size'

function List() {
  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name, record) => <Link to={`/dashboard/sizes/edit/${record.slug}`}>{name}</Link>,
    },
    {
      title: 'Loại',
      dataIndex: 'type',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (type) =>
        (type === 1 && 'size áo') || (type === 2 && 'size quần') || (type === 3 && 'khác'),
    },
    {
      title: 'Action',
      key: '_id',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/dashboard/sizes/edit/${record.slug}`}>Sửa</Link>
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
  const [id, setId] = useState()

  useEffect(() => {
    const fetchData = async () => {
      await getSizes().then((res) => {
        setData(res.data)
      })
    }
    fetchData()
  }, [])

  const handleOk = async () => {
    console.log(id)
    dispatch(hiddenModal())
    try {
      const res = await deteteSize(id)
      if (res.success) {
        setData(res.data)
        Toast.success('Delete size successfully!')
      }
    } catch (error) {
      Toast.error('Delete size error!')
    }
  }
  return (
    <>
      <Modal handleOk={handleOk} />
      <Top>
        <Button type="primary">
          <Link to={`/dashboard/sizes/store/`}>Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
