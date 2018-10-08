import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { recentData, tableHeaders, excludedHeaders } from '../data'
import Table from '../components/Table/Table'
import Header from '../components/Table/Header'

import {
  updateSearchTerm,
  sortBy,
  resetState,
  newFilter,
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

class TableContainer extends React.Component {

courseSearch = (data,searchTerm) => data.filter(course => (
  course.code.toLowerCase().includes(searchTerm.toLowerCase())
  || course.name.toLowerCase().includes(searchTerm.toLowerCase()))
)

specialSort(data, searchItem, isAscending) {
  let arraySort = data.concat()
  arraySort.sort(function (a, b) {
    const itemA = parseInt(a[searchItem], 10) ? parseInt(a[searchItem], 10) : a[searchItem]
    const itemB = parseInt(b[searchItem], 10) ? parseInt(b[searchItem], 10) : b[searchItem]
    if (isAscending) {
      return itemA > itemB ? -1 : 1
    }
    return itemA > itemB ? 1 : -1
  }
  )
  return arraySort
}
render(props){
const { searchTermProp, updateDispatchSearchTermProp, resetDispatchStateProp, activeFilterDispatchToProp, sortDispatchByProp, sortByProp, ascendingProp, activeFilterProp } = this.props

  return(
      <TableWrapper>
    <AreaWrapper gridArea="header">
      <Header
        searchTerm={searchTermProp}
        updateSearchTerm={updateDispatchSearchTermProp}
        resetState={resetDispatchStateProp}
        activateFilter={activeFilterDispatchToProp}
      />
    </AreaWrapper>
    <AreaWrapper gridArea="search" />
    <AreaWrapper gridArea="table">
      <Table
        headers={tableHeaders.styledHeaders}
        headersNoStyle={tableHeaders.headers}
        courseSearch={this.courseSearch(this.specialSort(recentData, sortByProp,ascendingProp), searchTermProp)}
        sortBy={sortDispatchByProp}
        excludedHeaders={excludedHeaders}
      /> 
    </AreaWrapper>
  </TableWrapper>
)
  }}

const mapStateToProps = ({ sorting }) => ({
  searchTermProp: sorting.searchTerm,
  sortByProp: sorting.sortBy,
  ascendingProp: sorting.ascending,
  activeFilterProp: sorting.activeFilter,
})

const mapDispatchToProps = dispatch => ({
  updateDispatchSearchTermProp: inputValue => dispatch(updateSearchTerm(inputValue)),
  sortDispatchByProp: sortTerm => dispatch(sortBy(sortTerm)),
  resetDispatchStateProp: () => dispatch(resetState()),
  activeFilterDispatchToProp: inputFilter => dispatch(newFilter(inputFilter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableContainer)
