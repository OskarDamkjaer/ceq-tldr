import React from 'react'
import styled from 'styled-components'
import { latestData, orderedHeaders } from '../data/DataManagement'
import Table from '../components/Table/Table'
import SearchInput from '../components/Table/SearchInput'
import Header from '../components/Table/Header'

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
      sortBy: 'name',
      ascending: false
    }
  }

  courseSearch = data => data.filter(course => (
    course.code.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    || course.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  )
  handleSortClick = (newSort) => {
    this.setState({ascending: !this.state.ascending})
    this.setState({ sortBy: newSort })
  }
  specialSort(data) {
    let arraySort = data.concat()
    let searchItem = this.state.sortBy
    let isAscending = this.state.ascending
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
  render() {
    return (
      <TableContainer>
        <AreaWrapper gridArea="header">
          <Header />
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
