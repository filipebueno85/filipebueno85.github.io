import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Portfólio Filipe Bueno</h1>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            <Link to="/projetos">Projetos</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
