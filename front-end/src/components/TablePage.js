import React from 'react'
import { latestData, orderedHeaders } from '../data/DataManagement'
import Table from './Table'

class TablePage extends React.Component {
  render () {return <Table data={latestData} headers={orderedHeaders}/>}
}

export default TablePage
