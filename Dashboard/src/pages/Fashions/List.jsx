import React, { memo, useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { clt } from '../../configs/table'
import { Top } from 'src/components/Styled'
import { getTypes } from 'src/services/type'
import { useDispatch } from 'react-redux'
import { openModal } from 'src/providers/modalSlice'
import Modal from 'src/components/Modal'
const List = () => {
  const [list, setList] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    document.title = 'DANH SÁCH LOẠI SẢN PHẨM'
    getTypes().then((res) => setList(res.data))
  }, [])
  clt.handleDelete = () => {
    dispatch(openModal())
  }

  return (
    <>
      <Top>
        <Button type="primary">
          <Link to="/dashboard/loai-san-pham/store">Thêm Mới</Link>
        </Button>
      </Top>
      <Table
        columns={clt.columns}
        rowKey="_id"
        dataSource={list}
        onChange={() => console.log('Change')}
      />
    </>
  )
}

export default memo(List)
