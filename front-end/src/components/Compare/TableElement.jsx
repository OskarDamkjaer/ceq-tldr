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
    background:${props => props.green && '#66D594'};
    padding: 5px;
`
const TableElement = ({
  header, data, color, green,
}) => (
  <Wrapper>
    <Header color={color}>{header}</Header>
    <div>
      <Data green={green} color={color}>{data}</Data>
    </div>
    <br />
  </Wrapper>
)

export default TableElement
