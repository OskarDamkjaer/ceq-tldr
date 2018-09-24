import React, { Component } from 'react'
import Table from './courses/Table'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Course = () => (
  <div>hj</div>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Table}/>
      <Route path="/:code" component={Course}/>
    </Switch>
  </Router>
)


export default App
