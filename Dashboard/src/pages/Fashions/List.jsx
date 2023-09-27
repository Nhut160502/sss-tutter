import React, { useEffect } from 'react'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { columns, data } from '../../configs'
import { Top } from 'src/components/Styled'
const List = () => {
  useEffect(() => {
    document.title = 'DANH SÁCH LOẠI SẢN PHẨM'
  }, [])
  return (
    <>
      <Top>
        <Button type="primary">
          <Link to="/dashboard/loai-san-pham/store">Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
