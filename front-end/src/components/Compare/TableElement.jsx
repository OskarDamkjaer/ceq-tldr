import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 70% 30%;
    font-size: 1.5em;
`
const Header = styled.span`
    color:${props => props.color};
    font-weight:${props => props.color};
`
const Data = styled.span`
    font-weight:${props => props.color};
`
const TableElement = ({ header, data, color }) => (
  <Wrapper>
    <Header color={color}>{header}</Header>
    <Data color={color}>{data}</Data>
    <br />
  </Wrapper>
)

export default TableElement
