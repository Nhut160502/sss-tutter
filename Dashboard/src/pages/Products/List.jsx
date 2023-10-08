import React, { useEffect, useState } from 'react'
import { Table, Button, Space } from 'antd'
import { Link } from 'react-router-dom'
import { Top } from 'src/components/Styled'
import { deleteProduct, getProducts } from 'src/services/product'
import { hiddenModal, openModal } from 'src/providers/modalSlice'
import { useDispatch } from 'react-redux'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import Modal from 'src/components/Modal'
import Toast from 'src/components/Toast'

const List = () => {
  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: '_id',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text, record) => <Link to={`/dashboard/san-pham/edit/${record.slug}`}>{text}</Link>,
    },
    {
      title: 'Loại Sản Phẩm',
      dataIndex: 'type',
      key: '_id',
      sorter: (a, b) => a.age - b.age,
      render: (type) => type?.name,
    },
    {
      title: 'Bộ Sưu Tập',
      dataIndex: 'collections',
      key: '_id',
      sorter: (a, b) => a.age - b.age,
      render: (collection) => collection?.name,
    },
    {
      title: 'Danh Mục',
      dataIndex: 'category',
      key: '_id',
      sorter: (a, b) => a.age - b.age,
      render: (category) => category?.name,
    },
    {
      title: 'Kích Thước',
      dataIndex: 'sizes',
      key: '_id',
      sorter: (a, b) => a.age - b.age,
      render: (sizes) => `${sizes.length} Kích Thước`,
    },
    {
      title: 'Màu Sắc',
      dataIndex: 'colors',
      key: '_id',
      sorter: (a, b) => a.age - b.age,
      render: (colors) => `${colors.length} Màu`,
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: '_id',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Giảm Giá',
      dataIndex: 'salePrice',
      key: '_id',
      sorter: (a, b) => a.salePrice - b.salePrice,
      render: (e) => `${e} %`,
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'media',
      key: '_id',
      render: (media, record) => (
        <Link to={`/dashboard/san-pham/edit/${record.slug}`}>
          <img className="img-thumbnail" src={media[0].gallery[0]} alt={record.name} />
        </Link>
      ),
    },
    {
      title: 'Ngày Thêm',
      dataIndex: 'createdAt',
      key: '_id',
      sorter: (a, b) => a.createdAt - b.createdAt,
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

  const handleOk = async () => {
    await deleteProduct(id).then((res) => {
      dispatch(hiddenModal())
      setData(res.data)
      Toast.success('Dử liệu đã được xoá thành công!')
    })
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
