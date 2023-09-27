import { Table } from 'antd'
import React from 'react'
import { columns, data } from 'src/configs'

const List = () => {
  return <Table dataSource={data} columns={columns} />
}

export default List
