import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Projects from '../components/Projects';


class Projetos extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="habilidades-container">
      <h2>Projetos</h2>
      </div>
      <div className="container">
        <Projects />
      </div>
      </div>
    );
  }
}

export default Projetos;