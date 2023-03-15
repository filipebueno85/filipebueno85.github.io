import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gitHub from '../images/githubIcon.png';
import home from '../images/homeIcon.png';
import linkedin from '../images/linkedinIcon.png';
import projects from '../images/projectsIcon.png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
            <Link to="/"><img width={ '40px' } src={ home } alt="" /></Link>
            <Link to="/projetos"><img width={ '40px' } src={ projects } alt="project" /></Link>
            <h1>Portfólio Filipe Bueno</h1>
            <a 
            href="https://github.com/filipebueno85" 
            target="_blank" 
            rel="noreferrer" 
            >
              <img width={ '50px' } src={gitHub} alt="github" />
              </a>
            <a 
            href="https://www.linkedin.com/in/filipebueno85/" 
            target="_blank" 
            rel="noreferrer" 
            >
             <img width={ '40px' } src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
