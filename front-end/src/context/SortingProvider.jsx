import React, { Component } from 'react'
import SortingContext from './sorting'

class SortingProvider extends Component {
/* eslint-disable */
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      sortBy: 'name',
      ascending: false,
      courseSearch: data => data.filter(course => (
        course.code.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        || course.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))),
      handleSortClick: (newSort) => {
        this.setState({ ascending: !this.state.ascending })
        this.setState({ sortBy: newSort })
      },
      specialSort: (data) => {
        const arraySort = data.concat()
        const searchItem = this.state.sortBy
        const isAscending = this.state.ascending
        arraySort.sort((a, b) => {
          const itemA = parseInt(a[searchItem], 10) ? parseInt(a[searchItem], 10) : a[searchItem]
          const itemB = parseInt(b[searchItem], 10) ? parseInt(b[searchItem], 10) : b[searchItem]
          if (isAscending) {
            return itemA > itemB ? -1 : 1
          }
          return itemA > itemB ? 1 : -1
        })
        return arraySort
      },
      handleInputChange: (event) => { this.setState({ searchTerm: event.target.value }) },
      reset: () => {
        this.setState({
          searchTerm: '',
          sortBy: 'name',
          ascending: false,
        })
      },
    }
  }

  render() {
    const { children } = this.props
    return <SortingContext.Provider value={this.state}>{children}</SortingContext.Provider>
  }
}

export default SortingProvider
