import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Inventory from './Inventory/Inventory';
import Demand from './Demand/Demand';
import Distribution from './Distribution/Distribution';
import Manufacturing from './Manufacturing/Manufacturing';
import Procurement from './Procurement/Procurement';
import MyProvider  from './MyProvider';

export class App extends Component {

  render() {
    return (
      <>
      <MyProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/inventory' component={Inventory} />
            <Route path='/demand' component={Demand} />
            <Route path='/manufacturing' component={Manufacturing} />
            <Route path='/distribution' component={Distribution} />
            <Route path='/procurement' component={Procurement} />
          </Switch>
        </Router>
      </MyProvider>
      </>
    )
  }
}

export default App;