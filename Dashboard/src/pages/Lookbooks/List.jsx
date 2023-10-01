import { Button, Table } from 'antd'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { columns, data } from '../../configs/table'
import { Top } from 'src/components/Styled'

const List = () => {
  useEffect(() => {
    document.title = 'DANH SÁCH BỘ SƯU TẬP'
  }, [])
  return (
    <>
      <Top>
        <Button type="primary">
          <Link to="/dashboard/lookbook/store">Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
