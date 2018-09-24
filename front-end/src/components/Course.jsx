import React from 'react'

const Course = ({ match }) => (
  <div>
    <h3>{`Sammanställning kurs: ${match.params.code.replace(/-/g, ' ')}`}</h3>
  </div>
)

export default Course
