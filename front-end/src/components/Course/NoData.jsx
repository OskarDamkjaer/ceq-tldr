import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 70%;
    display: flex;
    padding-top: 100px;
    padding-left: 100px;
`
const NoData = ({ name }) => (
  <Wrapper>
    <h1>
        No data available for
      {' '}
      {name}
          , you are probably looking a course with the same name but different course code.
    </h1>

  </Wrapper>
)

export default NoData
