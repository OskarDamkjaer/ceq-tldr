import React from 'react'
import Table from './components/Table'
import Course from './components/Course'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Table} />
      <Route path="/:code" component={Course} />
    </Switch>
  </Router>
)


export default App
