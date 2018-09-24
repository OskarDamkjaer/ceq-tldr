import React from 'react'
import styled from 'styled-components'

const DamnFineInput = styled.input`
 width: 300px; 
 height: 1.5em;
`

const SearchField = ({onChange, value}) => <DamnFineInput
  value={value}
  onChange={onChange}
  placeholder='Search by name or course code'/>

export default SearchField

