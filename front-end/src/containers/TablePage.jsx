import React from 'react'
import styled from 'styled-components'
import { latestData, orderedHeaders } from '../data/DataManagement'
import Table from '../components/Table'
import SearchInput from '../components/SearchInput'

const TableContainer = styled.div`
 display: grid;
 grid-template-areas: ".     header ."
                      ".     search ."
                      "table table  table";
 grid-template-rows: 100px 50px 1fr;
 grid-template-columns: 100px 1fr 1fr;
`

const AreaWrapper = styled.div`
  grid-area: ${props => props.gridArea};
 `

class TablePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      sortBy: 'name'
    }
  }

  courseSearch = data => data.filter(course => (
    course.code.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    || course.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  )
  handleSortClick = (newSort) => {
    this.setState({ sortBy: newSort })
  }
  specialSort(data) {
    let arraySort = []
    arraySort = data.concat()
    let searchItem = this.state.sortBy
    arraySort.sort(function (a, b) {
      if (a[searchItem] > b[searchItem]) {
        return 1;
      } else if (a[searchItem] < b[searchItem]) {
        return -1;
      }
      return 0;
    }
    )
    return arraySort
  }
  render() {
    return (
      <TableContainer>
        <AreaWrapper gridArea="header">
          <h1>CEQ-TLDR</h1>
        </AreaWrapper>
        <AreaWrapper gridArea="search">
          <SearchInput
            onChange={(event) => this.setState({ searchTerm: event.target.value })}
            value={this.state.searchTerm}
          />
        </AreaWrapper>

        <AreaWrapper gridArea="table">
          <Table
            data={this.courseSearch(this.specialSort(latestData))}
            headers={orderedHeaders}
            handleSortClick={this.handleSortClick}
          />
        </AreaWrapper>
      </TableContainer>
    )
  }
}

export default TablePage
