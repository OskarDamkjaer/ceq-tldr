import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'

const HeaderWrapper = styled.div`
  padding: 20px;
  width: 100vw;
  height: 100px;
  background: #117D69;
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
  color: #ffffff;
`

const Header = ({ handleInputChange, inputValue, reset }) => (
  <HeaderWrapper>
    <StyledLink to="/" style={{ textDecoration: 'none' }} onClick={() => reset()}>CEQ-TLDR</StyledLink>
    <InputWrapper>
      <SearchInput
        onChange={event => handleInputChange(event)}
        value={inputValue}
      />
    </InputWrapper>
  </HeaderWrapper>
)

export default Header
