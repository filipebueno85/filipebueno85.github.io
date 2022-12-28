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
            <a 
            href="https://github.com/filipebueno85" 
            target="_blank" 
            rel="noreferrer" 
            >
              GitHub
              </a>
            <a 
            href="https://www.linkedin.com/in/filipebueno85/" 
            target="_blank" 
            rel="noreferrer" 
            >
              Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
