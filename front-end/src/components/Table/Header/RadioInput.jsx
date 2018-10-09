import React from 'react'
import styled from 'styled-components'

import { filterList } from '../../../data'

const RadioStyle = styled.div`
  display:flex;
  align-items: center;
  margin-right: 15px;
`
const LabelStyle = styled.label`
  margin-left: 5px;
`

const RadioInoput = ({ activateFilter, activeFilter }) => (
  <RadioStyle>
    {filterList.map(filter => (
      <div
        key={`${filter}button`}
      >

        <input
          type="radio"
          id={filter}
          name="filter"
          checked={activeFilter === filter}
          onChange={event => activateFilter(event.target.id)}
        />
        <LabelStyle>{filter}</LabelStyle>

      </div>


    ))
      }
  </RadioStyle>

)

export default RadioInoput
