import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    font-size: 1.5em;
`
const Header = styled.span`
    color:${props => props.color};
`
const TableElement = ({ header, data, color }) => (
  <Wrapper>
    <Header color={color}>{header}</Header>
    <span>{data.split('+')}</span>
    <br />
  </Wrapper>
)

export default TableElement
