import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ColorProvider from './context/ColorProvider'
import CoursePage from './view/CoursePage'
//import ComparePage from './view/ComparePage'
import { historyListForCourseCode, INFOCOM } from './data/dataFetcher'
import TablePage from './view/TablePage'

const App = () => (
  <ColorProvider>
    <Router>
      <Switch>
        <Route exact path="/test" render={() => (<div>{historyListForCourseCode('FAFF25', INFOCOM)}</div>)}/>
        <Route exact path="/" component={TablePage}/>
        <Route path="/:code" component={CoursePage} />
      </Switch>
    </Router>
  </ColorProvider>
)

export default App
