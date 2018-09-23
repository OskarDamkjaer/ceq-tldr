import React, { Component } from 'react'
import Table from './courses/Table'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/"> <Table/> </Route>
          <Route path="/course/:code">
            <div>hej</div>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
