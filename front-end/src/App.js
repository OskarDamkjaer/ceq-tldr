import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import TablePage from './view/TablePage'
import CoursePage from './view/CoursePage'
import Compare from './view/Compare'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={TablePage} />
      <Route exact path="/compare" component={Compare} />
      <Route path="/:code" component={CoursePage} />
    </Switch>
  </Router>
)

export default App
