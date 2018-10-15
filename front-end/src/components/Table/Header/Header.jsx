import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import Dropdown from './Dropdown'

const HeaderWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const FirstWrapper = styled.div`
  padding: 20px;
  width: 100vw;
  display: grid;
  grid-template-columns: 15% 75% 10%;
  margin-bottom: 50px;
`
const InputWrapper = styled.div`
  padding-left: 20px;
`
const SecondWrapper = styled.div`
  display:grid;
  grid-template-columns: 60% 30% 10%;
  margin-bottom: 50px;
`
const StyledLink = styled.div`
  font-size: 2.5em;
  color: #000000;
  cursor: pointer;
`
const StyledFilter = styled.div`
  font-size: 2.5em;
  color: #000000;
  font-weight: lighter;
`
const AboutLink = styled(Link)`
  font-size: 1.5em;
  color: #000000;
  cursor:pointer;
`

const Header = ({
  searchTerm, updateSearchTerm, resetState, activateFilter, activeFilter,
}) => (
  <HeaderWrapper>
    <FirstWrapper>
      <StyledLink style={{ textDecoration: 'none' }} onClick={() => resetState()}>CEQ-TLDR</StyledLink>
      <div />
      <AboutLink to="../about" style={{ textDecoration: 'none' }}>
        <span>About</span>
      </AboutLink>
    </FirstWrapper>
    <SecondWrapper>
      <InputWrapper>
        <SearchInput
          onChange={event => updateSearchTerm(event.target.value)}
          value={searchTerm}
        />
      </InputWrapper>
      <StyledFilter>
      active filter
        {' '}
        {activeFilter}
      </StyledFilter>
      <Dropdown activateFilter={activateFilter} activeFilter={activeFilter} />
    </SecondWrapper>
  </HeaderWrapper>
)

export default Header
