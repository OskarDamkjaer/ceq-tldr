import React from 'react'
import styled from 'styled-components'
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

const HeaderStyle = styled.div`
  color: #ffffff;
  font-size: 2.5em;
`

const Header = ({ handleInputChange, inputValue }) => (
  <HeaderWrapper>
    <HeaderStyle>CEQ-TLDR</HeaderStyle>
    <InputWrapper>
      <SearchInput
        onChange={event => handleInputChange(event)}
        value={inputValue}
      />
    </InputWrapper>
  </HeaderWrapper>
)

export default Header
