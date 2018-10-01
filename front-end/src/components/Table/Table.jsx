import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeaderLink = styled(Link)`
color: #A9A9A9;
:hover{
  color: #000000;
  font-size: 1,2em;
}
`

const StyledLink = styled(Link)`
color: #000000;
:hover{
  color: #117D69;
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

const Table = ({
  data, headersNoStyle, headers, handleSortClick,
}) => (
  <PrettyTable>
    <thead>
      <PrettyTr>
        {headersNoStyle.map((key, index) => (
          <PrettyThHeader key={key}><StyledHeaderLink to="/" style={{ textDecoration: 'none' }} onClick={() => handleSortClick(key)}>{headers[index]}</StyledHeaderLink></PrettyThHeader>
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
            {headersNoStyle.slice(1).map(key =>
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
