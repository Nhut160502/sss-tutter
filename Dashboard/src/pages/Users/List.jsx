import { Table } from 'antd'
import React from 'react'
import { columns, data } from 'src/configs/table'

const List = () => {
  return <Table dataSource={data} columns={columns} />
}

export default List
