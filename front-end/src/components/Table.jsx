import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { latestData, orderedHeaders } from '../data/DataManagement'

const PrettyTable = styled.table`
`
const PrettyTr = styled.tr`
  font-size: 1.5em;
`

function Table() {
  return (
    <PrettyTable>
      <thead>
        <PrettyTr>

          {
          orderedHeaders.map(key => <th key={key}><Link to="/">{key}</Link></th>)
        }
        </PrettyTr>
      </thead>
      <tbody>
        {
        latestData.map(row => (
          <tr>
            {orderedHeaders.map(key => (
              <td key={row[key].code}>
                <Link
                  to={`/${row.name.toLowerCase().replace(/[, ]+/g, '')}`}
                >
                  {row[key]}
                </Link>
              </td>
            ))}
          </tr>
        ))
      }
      </tbody>
    </PrettyTable>
  )
}

Table.propTypes = {}

export default Table
