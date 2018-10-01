import React from 'react'
import styled from 'styled-components'
import { latestData, orderedHeaders, orderedHeadersStyled, colorArray, } from '../data/DataManagement'
import Table from '../components/Table/Table'
import Header from '../components/Table/Header'

const TableContainer = styled.div`
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
 const initialState = {
  searchTerm: '',
  sortBy: 'name',
  ascending: false,
 }

class TablePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      sortBy: 'name',
      ascending: false,
     }
  }

  courseSearch = data => data.filter(course => (
    course.code.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    || course.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  )
  handleSortClick = newSort => {
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
  handleInputChange = event => this.setState({ searchTerm: event.target.value })
  reset = () => this.setState(initialState)
  
  render() {
    return (
      <TableContainer>
        <AreaWrapper gridArea="header">
          <Header 
            handleInputChange={this.handleInputChange}
            inputValue={this.state.searchTerm}
            reset={this.reset}
          />
        </AreaWrapper>
        <AreaWrapper gridArea="search">
        </AreaWrapper>
        <AreaWrapper gridArea="table">
          <Table
            data={this.courseSearch(this.specialSort(latestData))}
            headers={orderedHeadersStyled}
            headersNoStyle={orderedHeaders}
            handleSortClick={this.handleSortClick}
            colorArray={colorArray}
          />
        </AreaWrapper>
      </TableContainer>
    )
  }
}

export default TablePage
