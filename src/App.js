import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ResponsiveDrawer from './pages/navigation';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ResponsiveDrawer}/>
      </Switch>
    );
  }
}

export default App;
