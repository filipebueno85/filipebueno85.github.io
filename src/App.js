import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Curriculum from './pages/curriculum';

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route path="/projetos" component={ Projetos }/>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cv" component={ Curriculum } />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
