import { Segmented } from 'antd'
import { Table } from 'antd/es'
import React, { useEffect, useState } from 'react'
import { Top } from 'src/components/Styled'
import { columns, data } from 'src/configs/table'

function List() {
  const [type, setType] = useState('waiting')

  const option = [
    { label: 'Chờ Xác Nhận', value: 'waiting' },
    { label: 'Chờ Lấy Hàng', value: 'retrieving' },
    { label: 'Đang Giao Hàng', value: 'shipping' },
    { label: 'Hoàn Thành', value: 'completed' },
    { label: 'Đã Hủy', value: 'canceled' },
  ]

  const handleChange = (value) => {
    setType(value)
  }

  useEffect(() => {
    switch (type) {
      case 'waiting':
        console.log('get list waiting')
        break
      case 'retrieving':
        console.log('get list retrieving')
        break
      case 'shipping':
        console.log('get list shipping')
        break
      case 'completed':
        console.log('get list completed')
        break
      case 'canceled':
        console.log('get list waiting')
        break

      default:
        break
    }
  }, [type])

  return (
    <>
      <Top className="flex-start">
        <Segmented options={option} onChange={handleChange} />
      </Top>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

export default List
