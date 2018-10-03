import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SortingProvider from './context/SortingProvider'
import ColorProvider from './context/ColorProvider'

import TablePage from './view/TablePage'
import CoursePage from './view/CoursePage'
import Compare from './view/Compare'

const App = () => (
  <SortingProvider>
    <ColorProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={TablePage} />
          <Route exact path="/compare" component={Compare} />
          <Route path="/:code" component={CoursePage} />
        </Switch>
      </Router>
    </ColorProvider>
  </SortingProvider>
)

export default App
