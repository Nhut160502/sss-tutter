import React, { useEffect } from 'react'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { data, columns } from '../../configs'
import { Top } from 'src/components/Styled'
const List = () => {
  useEffect(() => {
    document.title = 'DANH SÁCH DANH MỤC'
  }, [])
  return (
    <>
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
