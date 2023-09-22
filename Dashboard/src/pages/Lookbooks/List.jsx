import { Button, Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { columns, data } from '../../api'

const List = () => {
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

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  a {
    display: block;
  }
`

export default List
