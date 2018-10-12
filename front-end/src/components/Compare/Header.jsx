import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div` 
    height: 200px;
    background:${props => props.isWinner && '#66D594'};
    padding: 20px;
`
const HeaderDiv = styled.div`
    font-size: 30px;
    margin-right: 10px;
`
const Course = styled.div` 
    font-size: 2em;
    color:gray;
`

const Header = ({ courseName, courseCode, isWinner }) => (
  <Wrapper isWinner={isWinner}>
    <HeaderDiv>{courseName}</HeaderDiv>
    <Course>{courseCode}</Course>
  </Wrapper>
)

export default Header
