import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
 display:flex;
 flex-direction: column;
 justify-content: center;
`
const Header = styled.div`
 font-size: 2em;
 font-weight: bold;
 padding-bottom: 50px;
 padding-left: 20px;
`

const HeaderSpan = styled.span`
 font-size: 2em;
 padding-top: 20px;
 color: ${props => props.color};
 padding-left: 20px;
`
const CourseCodeStyle = styled.div`
 color: gray;
`
const GraphHeader = ({
  graphHeadersStyled, colorArray, name, courseCode,
}) => (
  <HeaderWrapper>
    <Header>
      {name}
      {' '}
      <CourseCodeStyle>{courseCode}</CourseCodeStyle>
      {' '}
    </Header>
    {graphHeadersStyled.map((header, index) => (
      <HeaderSpan color={colorArray[index]}>
        {header}
      </HeaderSpan>
    ))}
  </HeaderWrapper>
)

export default GraphHeader
