import React from 'react'
import styled from 'styled-components'
import CompareInput from '../Common/CompareInput'

const HeaderWrapper = styled.div`
 display:flex;
 flex-direction: column;
 align-items: center;
 margin-top: ${props => props.isNeg && '200px'};
 `
const Header = styled.div`
 font-size: 3em;
 font-weight: bold;
 padding-bottom: 50px;
 padding-left: 20px;
 `
const CourseCodeStyle = styled.div`
 color: gray;
`

const HeaderSpan = styled.span`
 font-size: 2em;
 color: ${props => props.color};
 padding-left: 20px;
 :hover{
  font-weight: bold;
  text-decoration: underline;
}
`

const GraphHeader = ({
  graphHeadersStyled, colorArray, name, courseCode, handleHover, handleOut, isNeg, isCourse, courseSuggestion, onEnter,
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
        key={header}
        onMouseOver={() => handleHover(header)}
        onMouseOut={() => handleOut()}
        color={colorArray[index]}
      >
        {header}
      </HeaderSpan>
    ))}
    <CompareInput course={courseCode} isCourse={isCourse} courseSuggestion={courseSuggestion} onEnter={onEnter} />
  </HeaderWrapper>
)

export default GraphHeader
