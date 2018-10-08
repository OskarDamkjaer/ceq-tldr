import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'
import RadioInput from './RadioInput'

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

const StyledLink = styled.div`
  font-size: 2.5em;
  color: #000000;
  cursor: pointer;
`

const Header = ({
  searchTerm, updateSearchTerm, resetState, activateFilter, activeFilter,
}) => (
  <HeaderWrapper>
    <StyledLink style={{ textDecoration: 'none' }} onClick={() => resetState()}>CEQ-TLDR</StyledLink>
    <RadioInput activateFilter={activateFilter} activeFilter={activeFilter} />
    <InputWrapper>
      <SearchInput
        onChange={event => updateSearchTerm(event.target.value)}
        value={searchTerm}
      />
    </InputWrapper>
  </HeaderWrapper>

)

export default Header
