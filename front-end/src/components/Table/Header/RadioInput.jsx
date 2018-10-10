import React from 'react'
import styled from 'styled-components'

import { filterList } from '../../../data'

const RadioStyle = styled.div`
  display:flex;
  align-items: center;
  margin-right: 15px;
`
const LabelStyle = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
const Toggler = styled.input`
  cursor: pointer;
  :hover{
    text-color: red;
  }
`
const TextSpan = styled.span`
  cursor: pointer;
  margin-right: 15px;
  font-size: 1.2em;
  :hover{
    color: #117D69;
    }
`

const RadioInoput = ({ activateFilter, activeFilter }) => (
  <RadioStyle>
    {filterList.map(filter => (
      <div
        key={`${filter}button`}
      >
        <LabelStyle>
          <TextSpan>{filter}</TextSpan>
          <Toggler
            type="radio"
            id={filter}
            name="filter"
            checked={activeFilter === filter}
            onChange={event => activateFilter(event.target.id)}
          />
        </LabelStyle>

      </div>


    ))
      }
  </RadioStyle>

)

export default RadioInoput
