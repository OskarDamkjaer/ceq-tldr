import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`
const FineInput = styled.input`
 width: 300px; 
 height: 3em;
 :focus {
    outline:none;
}
align-self: center;
`
const Header = styled.div`
 font-size: 2em;
 font-weight: bold;
 padding-bottom: 50px;
 padding-left: 20px;
 margin-top:40px;
 `

const CompareInput = () => (
  <Wrapper>
    <Header>Compare this course with another course</Header>
    <FineInput
      placeholder="Enter course code"
    />
  </Wrapper>
)

export default CompareInput
