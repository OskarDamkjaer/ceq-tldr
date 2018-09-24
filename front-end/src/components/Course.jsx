import React from 'react'

const Course = ({ match }) => (
    <div>
      <h3>{match.params.code}</h3>
      <h3>{match.url}</h3>
    </div>
  );

  export default Course;
