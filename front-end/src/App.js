import React from 'react'
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import TablePage from './containers/TablePage'
import Course from './components/Course'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={TablePage} />
      <Route path="/:code" component={Course} />
    </Switch>
  </Router>
)

export default App
