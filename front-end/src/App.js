import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import ColorProvider from './context/ColorProvider'
import TablePage from './view/TablePage'
import CoursePage from './view/CoursePage'
import ComparePage from './view/ComparePage'
import NoMatchPage from './view/NoMatchPage'
import AboutPage from './view/AboutPage'

const Wrapper = styled.div`
  min-width:1300px;
 `
const App = () => (
  <ColorProvider>
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={TablePage} />
          <Route exact path="/compare/:courses" component={ComparePage} />
          <Route exact path="/course/:code" component={CoursePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </Wrapper>
  </ColorProvider>)

export default App
