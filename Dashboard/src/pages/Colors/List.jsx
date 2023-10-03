import React, { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import { Link } from 'react-router-dom'
import { Top } from 'src/components/Styled'
import Modal from 'src/components/Modal'
import { useDispatch } from 'react-redux'
import { hiddenModal, openModal } from 'src/providers/modalSlice'
import { deteteColor, getColors } from 'src/services/color'
import { styled } from 'styled-components'
import Toast from 'src/components/Toast'

function List() {
  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name, record) => <Link to={`/dashboard/colors/edit/${record.slug}`}>{name}</Link>,
    },
    {
      title: 'Mã Màu',
      dataIndex: 'code',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text, record) => (
        <ColorTd>
          <div style={{ backgroundColor: `${text}` }}></div>
        </ColorTd>
      ),
    },
    {
      title: 'Action',
      key: '_id',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/dashboard/color/edit/${record.slug}`}>Sửa</Link>
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
      await getColors().then((res) => {
        setData(res.data)
      })
    }
    fetchData()
  }, [])

  const handleOk = async () => {
    dispatch(hiddenModal())
    await deteteColor(id).then((res) => {
      setData(res.data)
      Toast.success('Delete color successfully!')
    })
  }
  return (
    <>
      <Modal handleOk={handleOk} />
      <Top>
        <Button type="primary">
          <Link to={`/dashboard/colors/store/`}>Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

const ColorTd = styled.div`
  > div {
    width: 40px;
    height: 20px;
    border: 1px solid #000000;
  }
`

export default List
