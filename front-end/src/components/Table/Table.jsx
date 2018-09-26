import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
color: #000000;
:hover{
  color: #75BBC0;
}
`

const PrettyTable = styled.table`
  border-collapse: collapse;
`
const PrettyTr = styled.tr`
  :hover{
    background-color: #f5f5f5;
  }
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

const Table = ({ data, headers, handleSortClick }) => (
  <PrettyTable>
    <thead>
      <PrettyTr>
        {headers.map(key => (
          <PrettyThHeader key={key}><StyledLink to="/" style={{ textDecoration: 'none' }} onClick={() => handleSortClick(key)}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</StyledLink></PrettyThHeader>
        ))}
      </PrettyTr>
    </thead>
    <tbody>
      {
        data.map(row => (
          <PrettyTr key={row.code}>
            <PrettyTdHeader>
              <StyledLink
                to={`/${row.code}`}
                style={{ textDecoration: 'none' }}
              >
                {row.name}
              </StyledLink>
            </PrettyTdHeader>
            {headers.slice(1).map(key =>
              (
                <PrettyTd key={key + row.name}>
                  <StyledLink
                    to={`/${row.code}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {row[key]}
                  </StyledLink>
                </PrettyTd>
              ))
            }
          </PrettyTr>
        ))
      }
    </tbody>
  </PrettyTable>
)


export default Table
