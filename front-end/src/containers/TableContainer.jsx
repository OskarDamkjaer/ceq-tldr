import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { latestData, tableHeaders } from '../data'
import Table from '../components/Table/Table'
import Header from '../components/Table/Header'

import {
  updateSearchTerm,
  sortBy,
  resetState,
} from '../duck-reducers/sorting'

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

const TableContainer = ({ searchTermProp, updateSearchTermProp, resetStateProp }) => (
  <TableWrapper>
    <AreaWrapper gridArea="header">
      <Header
        searchTerm={searchTermProp}
        updateSearchTerm={updateSearchTermProp}
        resetState={resetStateProp}
      />
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

const mapStateToProps = ({ sorting }) => ({
  searchTermProp: sorting.searchTerm,
  sortByProp: sorting.sortBy,
  ascendingProp: sorting.ascending,
})

const mapDispatchToProps = dispatch => ({
  updateSearchTermProp: inputValue => dispatch(updateSearchTerm(inputValue)),
  sortByProp: sortTerm => dispatch(sortBy(sortTerm)),
  resetStateProp: () => dispatch(resetState()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableContainer)
