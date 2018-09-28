import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
 display:flex;
 flex-direction: column;
 justify-content: center;
`


const HeaderSpan = styled.span`
 font-size: 2em;
 padding-top: 20px;
 color: ${props => props.color};
`

const GraphHeader = ({ graphHeadersStyled, colorArray }) => (
  <HeaderWrapper>
    {graphHeadersStyled.map((header, index) => (
      <HeaderSpan color={colorArray[index]}>
        {header}
      </HeaderSpan>
    ))}
  </HeaderWrapper>
)

export default GraphHeader
