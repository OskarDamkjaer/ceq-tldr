import React from 'react'
import styled from 'styled-components'
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

const StyledLink = styled.div`
  font-size: 2.5em;
  color: #000000;
  cursor: pointer;
`
const RadioStyle = styled.div`
  display:flex;
  align-items: center;
  margin-right: 15px;
`
const LabelStyle = styled.label`
  margin-left: 5px;
`

const Header = ({
  searchTerm, updateSearchTerm, resetState, activateFilter,
}) => (
  <HeaderWrapper>
    <StyledLink style={{ textDecoration: 'none' }} onClick={() => resetState()}>CEQ-TLDR</StyledLink>
    <RadioStyle>
      <input
        type="radio"
        id="c"
        name="filter"
        value="Infocom"
        onClick={event => activateFilter(event.target.id)}
      />
      <LabelStyle>Infocom</LabelStyle>
    </RadioStyle>
    <RadioStyle>
      <input
        type="radio"
        id="d"
        name="filter"
        value="Datateknik"
        onClick={event => activateFilter(event.target.id)}
      />
      <LabelStyle>Datateknik</LabelStyle>
    </RadioStyle>
    <RadioStyle>
      <input
        type="radio"
        id="s"
        name="filter"
        value="Specialicering"
        defaultChecked
        onClick={event => activateFilter(event.target.id)}
      />
      <LabelStyle>Specialicering</LabelStyle>
    </RadioStyle>
    <InputWrapper>
      <SearchInput
        onChange={event => updateSearchTerm(event.target.value)}
        value={searchTerm}
      />
    </InputWrapper>
  </HeaderWrapper>

)

export default Header
