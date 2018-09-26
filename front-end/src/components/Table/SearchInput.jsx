import React from 'react'
import styled from 'styled-components'

const DamnFineInput = styled.input`
 width: 300px; 
 height: 1.4em;
 grid-area: ${props => props.gridArea};
`

const SearchField = ({ onChange, value, gridArea }) => (
  <DamnFineInput
    value={value}
    onChange={onChange}
    gridArea={gridArea}
    placeholder="Search by name or course code"
  />
)

export default SearchField
