import React from 'react'
import { latestData, orderedHeaders } from '../data/DataManagement'
import Table from '../components/Table'
import SearchInput from '../components/SearchInput'

class TablePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchTerm: ''}
  }

  courseSearch = data => data.filter(course => (
    course.code.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    || course.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  )

  render() {
    return (
      <div>
        <SearchInput
          onChange={(event) => this.setState({searchTerm: event.target.value})}
          value={this.state.searchTerm}/>
        <Table data={this.courseSearch(latestData)} headers={orderedHeaders} placeholder="Search for course code or name"/>
      </div>
    )
  }
}

export default TablePage
