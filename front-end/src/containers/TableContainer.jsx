import React from 'react'
import styled from 'styled-components'
import { latestData, tableHeaders } from '../data'
import Table from '../components/Table/Table'
import Header from '../components/Table/Header'

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
      <Table
        headers={tableHeaders().styledHeaders}
        headersNoStyle={tableHeaders().headers}
        latestData={latestData}
      />
    </AreaWrapper>
  </TableWrapper>
)

export default TableContainer
