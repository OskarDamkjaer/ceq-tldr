import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  padding: 20px;
  width: 100vw;
  height: 100px;
  display: flex;
`

const StyledLink = styled(Link)`
  font-size: 2.5em;
  color: #000000;
  cursor:pointer;
`

const PageHeader = () => (
  <HeaderWrapper>
    <StyledLink to="../" style={{ textDecoration: 'none' }}>
      <div>CEQ</div>
      <div>-TLDR</div>
    </StyledLink>
  </HeaderWrapper>

)

export default PageHeader
