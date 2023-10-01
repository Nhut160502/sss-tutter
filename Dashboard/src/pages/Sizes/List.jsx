import React from 'react'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { data, columns } from '../../configs/table'
import { Top } from 'src/components/Styled'
function List() {
  return (
    <>
      <Top>
        <Button type="primary">
          <Link to={`/dashboard/sizes/store`}>Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
