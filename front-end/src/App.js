import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ColorProvider from './context/ColorProvider'

import TablePage from './view/TablePage'
import CoursePage from './view/CoursePage'
import Test from './data/lastFiveYears/Test'
import Compare from './view/Compare'

const App = () => (
  <ColorProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={TablePage} />
        <Route exact path="/compare" component={Compare} />
        <Route exact path="/test" component={Test} />
        <Route path="/:code" component={CoursePage} />
      </Switch>
    </Router>
  </ColorProvider>
)

export default App
