import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const CodeWrapper = styled.div`
    align-self: flex-end;
    font-size: 14px;
    color: #a9a9a9;
`
const NameWrapper = styled.div`

`
const CourseName = ({ name, code }) => (
  <HeaderWrapper>
    <NameWrapper>{name}</NameWrapper>
    <CodeWrapper>{code}</CodeWrapper>
  </HeaderWrapper>
)

export default CourseName
