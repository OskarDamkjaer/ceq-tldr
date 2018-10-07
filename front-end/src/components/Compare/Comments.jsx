import React from 'react'

const headlines = ['Studierådets kommentarer', 'Programledarens kommentarer', 'Kurslärarens kommenterer', 'Kurslärarens kommentarer']

const headLineCreator = (sentence) => {
  const jsxList = []
  for (let i = 0; i < headlines.length; i += 1) {
    if (sentence.includes(headlines[i])) {
      jsxList.push(jsxList.length === 0 ? (
        <span>
          <h3>{headlines[i]}</h3>
          <span>{`${sentence.replace(headlines[i], '')}. `}</span>
        </span>
      ) : <h3>{headlines[i]}</h3>)
    }
  }
  jsxList.push(jsxList.length === 0 && <span>{`${sentence}. `}</span>)
  return jsxList
}

const Comments = ({ comments }) => (
  <div>
    <h2>Swedish comments from Studierådet and Programledarna</h2>
    { comments.split('.').map(
      headLineCreator,
    )
    }
  </div>
)

export default Comments
