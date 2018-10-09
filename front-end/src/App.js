import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ColorProvider from './context/ColorProvider'
import TablePage from './view/TablePage'
import CoursePage from './view/CoursePage'
import ComparePage from './view/ComparePage'
import NoMatchPage from './view/NoMatchPage'

const App = () => (
  <ColorProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={TablePage} />
        <Route exact path="/compare/:courses" component={ComparePage} />
        <Route exact path="/course/:code" component={CoursePage} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  </ColorProvider>
)

export default App
