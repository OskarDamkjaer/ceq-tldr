import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PrettyTable = styled.table`
`
const PrettyTr = styled.tr`
  font-size: 1.5em;
`
const PrettyTd = styled.td`
  font-size: 1.5em;
  text-align: center;
  padding: 2px;
`
const PrettyTdHeader = styled.td`
  font-size: 1.5em;
  padding: 2px;
`

const Table = ({ data, headers }) => (
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
            <PrettyTdHeader>
              <Link
                to={`/${row.name.replace(/[, ]+/g, '-')}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                {row.name}
              </Link>
            </PrettyTdHeader>
            {headers.slice(1).map(key =>
              (
                <PrettyTd key={row[key].code}>
                  <Link
                    to={`/${row.name.replace(/[, ]+/g, '-')}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    {row[key]}
                  </Link>
                </PrettyTd>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </PrettyTable>
)

export default Table
