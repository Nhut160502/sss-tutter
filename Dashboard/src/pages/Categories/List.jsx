import React, { useEffect } from 'react'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { data, columns } from '../../configs'
const List = () => {
  useEffect(() => {
    document.title = 'DANH SÁCH DANH MỤC'
  }, [])
  return (
    <>
      <Top>
        <Button type="primary">
          <Link to="/dashboard/danh-muc/store">Thêm Mới</Link>
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
