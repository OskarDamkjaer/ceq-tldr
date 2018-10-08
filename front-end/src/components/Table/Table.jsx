import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CourseName from './CourseName'
import ColorContext from '../../context/color'

const StyledHeaderLink = styled(Link)`
color: ${props => props.color};
:hover{
  color: #000000;
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
  courseSearch, headersNoStyle, headers, sortBy, excludedHeaders,
}) => (
  <PrettyTable>
    <thead>
      <PrettyTr>
        {headersNoStyle.map((key, index) => !excludedHeaders.includes(key)
            && (
              <PrettyThHeader key={key}>
                <ColorContext.Consumer>
                  {colorArray => <StyledHeaderLink color={colorArray[index]} to="/" style={{ textDecoration: 'none' }} onClick={() => sortBy(key)}>{headers[index]}</StyledHeaderLink>}
                </ColorContext.Consumer>

              </PrettyThHeader>
            ))}

      </PrettyTr>
    </thead>
    <tbody>
      {
          courseSearch.map(row => (
            <PrettyTr key={row.code}>
              <PrettyTdHeader>
                <StyledLink
                  to={`/${row.code}`}
                  style={{ textDecoration: 'none' }}
                >
                  <CourseName name={row.name} code={row.code} />
                </StyledLink>
              </PrettyTdHeader>
              {headersNoStyle.slice(2).map(key => !excludedHeaders.includes(key)
                && (
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
