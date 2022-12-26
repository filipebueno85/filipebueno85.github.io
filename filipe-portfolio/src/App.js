import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projetos from './pages/Projetos';

class App extends Component {
  render () {
  return (
      <BrowserRouter>
      <Switch>
        <Route path="/projetos" component={ Projetos }/>
        <Route exact path="/" component={ Home } />
      </Switch>
      </BrowserRouter>
  );
}
}

export default App;
