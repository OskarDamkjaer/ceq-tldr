import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PrettyTable = styled.table`
  border-collapse: collapse;
`
const PrettyTr = styled.tr`
  font-size: 1.5em;
`
const PrettyTd = styled.td`
  border-bottom: 1px solid #ddd;
  font-size: 1.5em;
  text-align: center;
  padding: 2px;
`
const PrettyTdHeader = styled.td`
  border-bottom: 1px solid #ddd;
  font-size: 1.5em; 
  padding: 5px;
`

const PrettyThHeader = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 15px;
`

const Table = ({
  data, headers, handleSortClick, hoover, hoverOn,
}) => (
  <PrettyTable>
    <thead>
      <PrettyTr>
        {headers.map(key => (
          <PrettyThHeader key={key}><Link to="/" style={{ textDecoration: 'none', color: 'black' }} onClick={() => handleSortClick(key)}>{key}</Link></PrettyThHeader>
        ))}
      </PrettyTr>
    </thead>
    <tbody>
      {
        data.map((row) => {
          if (row.code !== hoverOn) {
            return (
              <tr key={row.code}>
                <PrettyTdHeader>
                  <Link
                    to={`/${row.name.replace(/[, ]+/g, '-')}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                    onMouseEnter={() => hoover(row.code)}
                  >
                    {row.name}
                  </Link>
                </PrettyTdHeader>
                {headers.slice(1).map(key =>
                  (
                    <PrettyTd key={key + row.name}>
                      <Link
                        to={`/${row.name.replace(/[, ]+/g, '-')}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                        onMouseEnter={() => hoover(row.code)}
                      >
                        {row[key]}
                      </Link>
                    </PrettyTd>
                  ))
            }
              </tr>
            )
          }
          return (
            <tr key={row.code} bgcolor="#f5f5f5">
              <PrettyTdHeader>
                <Link
                  to={`/${row.name.replace(/[, ]+/g, '-')}`}
                  style={{ textDecoration: 'none', color: '#75BBC0' }}
                  onMouseEnter={() => hoover(row.code)}
                >
                  {row.name}
                </Link>
              </PrettyTdHeader>
              {headers.slice(1).map(key =>
                (
                  <PrettyTd key={key + row.name}>
                    <Link
                      to={`/${row.name.replace(/[, ]+/g, '-')}`}
                      style={{ textDecoration: 'none', color: '#75BBC0' }}
                    >
                      {row[key]}
                    </Link>
                  </PrettyTd>
                ))
              }
            </tr>
          )
        })
      }
    </tbody>
  </PrettyTable>
)


export default Table
