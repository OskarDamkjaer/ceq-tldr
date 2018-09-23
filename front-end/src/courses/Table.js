import React from 'react'
import styled from 'styled-components'
import { latestData, orderedHeaders } from './DataManagement'

const PrettyTable = styled.table`
`

function Table (props) {
  return (
    <PrettyTable>
      <thead>
      <tr>
        {
          orderedHeaders.map(key => <th key={key}>{key}</th>)
        }
      </tr>
      </thead>
      <tbody>
      {
        latestData.map((row, index) => (
          <tr>
            {orderedHeaders.map(key => <td key={row[key].code}>{row[key]}</td>)}
          </tr>
        ))
      }
      </tbody>
    </PrettyTable>
  )
}

Table.propTypes = {}

export default Table
