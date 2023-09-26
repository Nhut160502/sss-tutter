import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Segmented, Table } from 'antd'
import { columns, data } from 'src/configs'
import { Link } from 'react-router-dom'

const data1 = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
]

const List = () => {
  const [attr, SetAttr] = useState('colors')
  const [dataTb, setDataTb] = useState(data)
  const handleChange = (value) => {
    if (value === 'sizes') {
      setDataTb(data1)
    } else {
      setDataTb(data)
    }
    SetAttr(value)
  }

  return (
    <>
      <Top>
        <Segmented
          defaultValue={attr || 'colors'}
          onChange={handleChange}
          options={[
            { label: 'Màu Sắc', value: 'colors' },
            { label: 'Kích Thước', value: 'sizes' },
          ]}
        />
        <Button type="primary">
          <Link to={`/dashboard/attribute/store/${attr}`}>Thêm Mới</Link>
        </Button>
      </Top>
      <Table dataSource={dataTb} columns={columns} />
    </>
  )
}

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-bottom: 1.5rem;
  button {
    padding: 0;
    a {
      display: block;
      padding: 4px 15px;
    }
  }
`

export default List
