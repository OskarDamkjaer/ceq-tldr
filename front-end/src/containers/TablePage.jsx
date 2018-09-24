import React from 'react'
import { latestData, orderedHeaders } from '../data/DataManagement'
import Table from '../components/Table'

class TablePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchTerm: ''}
  }

  render() {
    return (
      <Table data={latestData} headers={orderedHeaders} />
    )
  }
}

export default TablePage
