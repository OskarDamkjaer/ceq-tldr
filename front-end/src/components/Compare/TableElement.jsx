import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    font-size: 1.5em;
`
const Header = styled.span`
    color:${props => props.color};
`
const TableElement = ({ header, data, color }) => (
  <Wrapper>
    <Header color={color}>{header}</Header>
    <span>{data}</span>
  </Wrapper>
)

export default TableElement
