import React from 'react'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { columns, data } from '../../api/index'
const List = () => {
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

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  a {
    display: block;
  }
`

export default List
