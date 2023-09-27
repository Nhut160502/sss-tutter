import { Segmented } from 'antd'
import React from 'react'
import { Top } from 'src/components/Styled'

function List() {
  return (
    <Top className="flex-start">
      <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    </Top>
  )
}

export default List
