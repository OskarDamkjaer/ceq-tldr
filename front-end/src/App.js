import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Table from './components/Table';
import Course from './components/Course';


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Table} />
      <Route path="/:code" component={Course} />
    </Switch>
  </Router>
);


export default App;
