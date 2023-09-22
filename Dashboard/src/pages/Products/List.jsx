import React from 'react'
import { styled } from 'styled-components'
import { Table, Button } from 'antd'
import { Link } from 'react-router-dom'
import { data, columns } from '../../api'

const List = () => {
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

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  button {
    padding: 0;
    a {
      display: block;
      padding: 4px 15px;
    }
  }
`

export default List
