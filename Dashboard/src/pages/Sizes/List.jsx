import React from 'react'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { data, columns } from '../../configs'
import { styled } from 'styled-components'
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
