import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'

const HeaderWrapper = styled.div`
  padding: 20px;
  width: 100vw;
  height: 100px;
  display: flex;
`
const InputWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-self: center;
`

const StyledLink = styled(Link)`
  font-size: 2.5em;
  color: #000000;
`

const Header = ({ searchTerm, updateSearchTerm, resetState }) => (
  <HeaderWrapper>
    <StyledLink to="/" style={{ textDecoration: 'none' }} onClick={() => resetState()}>CEQ-TLDR</StyledLink>
    <InputWrapper>
      <SearchInput
        onChange={event => updateSearchTerm(event.target.value)}
        value={searchTerm}
      />
    </InputWrapper>
  </HeaderWrapper>

)

export default Header
