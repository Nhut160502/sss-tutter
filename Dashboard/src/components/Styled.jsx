import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const TopContainer = styled.div`
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
  &.flex-start {
    justify-content: flex-start !important;
  }
`
const Top = (props) => {
  const { children } = props
  return <TopContainer {...props}>{children}</TopContainer>
}

Top.propTypes = {
  children: PropTypes.node,
}
export { Top }
