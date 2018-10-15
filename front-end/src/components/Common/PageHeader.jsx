import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  padding: 50px;
  width: 100vw;
  height: 150px;
  display: grid;
  grid-template-columns: 90% 10%;
`

const StyledLink = styled(Link)`
  font-size: 2.5em;
  color: #000000;
  cursor:pointer;
`
const AboutLink = styled(Link)`
  font-size: 1.5em;
  color: #000000;
  cursor:pointer;
`

const PageHeader = () => (
  <HeaderWrapper>
    <StyledLink to="../" style={{ textDecoration: 'none' }}>
      <div>CEQ-TLDR</div>
    </StyledLink>
    <AboutLink to="../about" style={{ textDecoration: 'none' }}>
      <span>About</span>
    </AboutLink>
  </HeaderWrapper>

)

export default PageHeader
