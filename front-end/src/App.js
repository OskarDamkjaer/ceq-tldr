import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SortingProvider from './context/SortingProvider'

import TablePage from './view/TablePage'
import CoursePage from './view/CoursePage'
import Compare from './view/Compare'

const App = () => (
  <SortingProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={TablePage} />
        <Route exact path="/compare" component={Compare} />
        <Route path="/:code" component={CoursePage} />
      </Switch>
    </Router>
  </SortingProvider>
)

export default App
