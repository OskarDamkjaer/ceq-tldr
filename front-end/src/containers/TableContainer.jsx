import React from 'react'
import styled from 'styled-components'
import {
  latestData, orderedHeaders, orderedHeadersStyled, colorArray,
} from '../data'
import Table from '../components/Table/Table'
import Header from '../components/Table/Header'
import ColorContext from '../context/color'

const TableWrapper = styled.div`
 display: grid;
 grid-template-areas: "header header header"
                      ". . ."
                      "table table  table";
 grid-template-rows: 100px 50px 1fr;
 grid-template-columns: 100px 1fr 1fr;
`

const AreaWrapper = styled.div`
  grid-area: ${props => props.gridArea};
 `

const TableContainer = () => (
  <TableWrapper>
    <AreaWrapper gridArea="header">
      <Header />
    </AreaWrapper>
    <AreaWrapper gridArea="search" />
    <AreaWrapper gridArea="table">
      <ColorContext.Provider value={colorArray}>
        <Table
          headers={orderedHeadersStyled}
          headersNoStyle={orderedHeaders}
          latestData={latestData}
        />
      </ColorContext.Provider>
    </AreaWrapper>
  </TableWrapper>
)

export default TableContainer
