import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PrettyTable = styled.table`
`
const PrettyTr = styled.tr`
  font-size: 1.5em;
`

function Table({ data, headers }) {
  return (
    <PrettyTable>
      <thead>
        <PrettyTr>
          {headers.map(key => <th key={key}><Link to="/">{key}</Link></th>)}
        </PrettyTr>
      </thead>
      <tbody>
        {
        data.map(row => (
          <tr>
            {headers.map(key =>
              (
                <td key={row[key].code}>
                  <Link
                    to={`/${row.name.toLowerCase().replace(/[, ]+/g, '')}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    {row[key]}
                  </Link>
                </td>
              ))
            }
          </tr>
        ))
      }
      </tbody>
    </PrettyTable>
  )
}

export default Table
