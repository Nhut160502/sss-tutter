import React from 'react'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { columns, data } from 'src/configs/table'
import { Top } from 'src/components/Styled'

function List() {
  return (
    <>
      <Top>
        <Button type="primary">
          <Link to={`/dashboard/colors/store/`}>Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
