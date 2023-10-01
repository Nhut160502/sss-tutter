import React, { useEffect } from 'react'
import { Table, Button } from 'antd'
import { Link } from 'react-router-dom'
import { data, columns } from '../../configs/table'
import { Top } from 'src/components/Styled'

const List = () => {
  useEffect(() => {
    document.title = 'DANH SÁCH SẢN PHẨM'
  }, [])
  return (
    <>
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
