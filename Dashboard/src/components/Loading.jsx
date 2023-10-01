import React from 'react'
import { styled } from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

const Loading = () => {
  const loading = useSelector((state) => state?.loading?.visibility)
  return (
    <Wrapper className={loading && 'show'}>
      <LoadingOutlined />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  transition: all 0.4s;
  opacity: 0;
  visibility: hidden;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  svg {
    font-size: 2.5rem;
    color: #fff;
  }
`

export default Loading
