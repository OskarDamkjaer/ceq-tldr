import React from 'react'
import styled from 'styled-components'

const DamnFineInput = styled.input`
 width: 700px; 
 height: 3em;
 grid-area: ${props => props.gridArea};
 :focus {
    outline:none;
}
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
