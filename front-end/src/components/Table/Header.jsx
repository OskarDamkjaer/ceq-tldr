import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import SortingContext from '../../context/sorting'

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

const Header = () => (
  <SortingContext.Consumer>
    {context => (
      <HeaderWrapper>
        <StyledLink to="/" style={{ textDecoration: 'none' }} onClick={() => context.reset()}>CEQ-TLDR</StyledLink>
        <InputWrapper>
          <SearchInput
            onChange={event => context.handleInputChange(event)}
            value={context.searchTerm}
          />
        </InputWrapper>
      </HeaderWrapper>
    )}
  </SortingContext.Consumer>

)

export default Header
