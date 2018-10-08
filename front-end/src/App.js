import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ColorProvider from './context/ColorProvider'
import TablePage from './view/TablePage'
import CoursePage from './view/CoursePage'
import ComparePage from './view/ComparePage'

const App = () => (
  <ColorProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={TablePage} />
        <Route exact path="/compare/:courses" component={ComparePage} />
        <Route path="/:code" component={CoursePage} />
      </Switch>
    </Router>
  </ColorProvider>
)

export default App
