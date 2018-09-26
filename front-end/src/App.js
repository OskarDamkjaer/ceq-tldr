import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import TablePage from './view/TablePage'
import CoursePage from './view/CoursePage'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={TablePage} />
      <Route path="/:code" component={CoursePage} />
    </Switch>
  </Router>
)

export default App
