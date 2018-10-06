import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
 display:flex;
 flex-direction: column;
 align-items: center;
 margin-top: ${props => props.isNeg && '200px'}
`
const Header = styled.div`
 font-size: 3em;
 font-weight: bold;
 padding-bottom: 50px;
 padding-left: 20px;
`

const HeaderSpan = styled.span`
 font-size: 2em;
 color: ${props => props.color};
 padding-left: 20px;
 :hover{
  font-weight: bold;
}
`
const CourseCodeStyle = styled.div`
 color: gray;
`
const GraphHeader = ({
  graphHeadersStyled, colorArray, name, courseCode, handleHover, handleOut, isNeg,
}) => (
  <HeaderWrapper isNeg={isNeg}>
    <Header>
      {name}
      {' '}
      <CourseCodeStyle>{courseCode}</CourseCodeStyle>
      {' '}
    </Header>
    {graphHeadersStyled.map((header, index) => (
      <HeaderSpan
        onMouseOver={() => handleHover(header)}
        onMouseOut={() => handleOut()}
        color={colorArray[index]}
      >
        {header}
      </HeaderSpan>
    ))}
  </HeaderWrapper>
)

export default GraphHeader
