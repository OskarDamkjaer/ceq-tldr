import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div` 
    height: 180px;
    background:${props => props.isWinner && '#66D594'};
    padding: 20px;
`

const RemoveBtn = styled.div` 
    display:flex;
    justify-content: flex-end;
    margin-right: 170px;
    cursor: pointer;
`
const HeaderDiv = styled.div`
    font-size: 30px;
    margin-right: 10px;
`
const Course = styled.div` 
    font-size: 2em;
    color:gray;
`

const Header = ({
  courseName, courseCode, isWinner, onEnter,
}) => (
  <Wrapper isWinner={isWinner}>
    <HeaderDiv>{courseName}</HeaderDiv>
    <Course>{courseCode}</Course>
    <RemoveBtn onClick={() => onEnter(courseCode, true)}>REMOVE</RemoveBtn>
  </Wrapper>
)

export default Header
