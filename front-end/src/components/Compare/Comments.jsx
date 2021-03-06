import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div` 
    padding: 30px;
`

const headlines = ['Studierådets kommentarer', 'Programledarens kommentarer', 'Kurslärarens kommenterer', 'Kurslärarens kommentarer']

const headLineCreator = (sentence) => {
  const jsxList = []
  for (let i = 0; i < headlines.length; i += 1) {
    if (sentence.includes(headlines[i])) {
      jsxList.push(jsxList.length === 0 ? (
        <span key={sentence + headlines[i]}>
          <h3>{headlines[i].toUpperCase()}</h3>
          <span>{`${sentence.replace(headlines[i], '')}. `}</span>
        </span>
      ) : <h3 key={sentence + headlines[i]}>{headlines[i].toUpperCase()}</h3>)
    }
  }
  jsxList.push(jsxList.length === 0 && <span key={`${sentence}span`}>{`${sentence}. `}</span>)
  return (
    <div key={sentence}>
      {jsxList}
      {' '}
    </div>
  )
}

const Comments = ({ comments }) => (
  <div>
    <h1>Swedish comments from Studierådet and Programledarna</h1>
    <Wrapper>
      { comments.split('.').map(
        headLineCreator,
      )
    }
    </Wrapper>
  </div>
)

export default Comments
