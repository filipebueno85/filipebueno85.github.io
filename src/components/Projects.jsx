import React, { Component } from 'react';
import cardTrunfo from '../images/card-trunfo.png';
import filipeTunes from '../images/filipe-tunes.png';

class Projects extends Component {
  render() {
    return (
      <div className="projetos">
        <div>
        <div className="projeto-container">
          <img
            src={cardTrunfo}
            alt="card-trunfo"
             />
          <br />
          <a className="trunfo-link" href="https://card-trunfo-p55g.vercel.app/" target="_blank" rel="noreferrer">Card Trunfo</a>
        </div>
        <div className="projeto-container">
          <img
            src={filipeTunes}
            alt="card-trunfo"
           />
          <br />
          <a className="trunfo-link" href="https://filipe-tunes.vercel.app/" target="_blank" rel="noreferrer">Filipe Tunes</a>
        </div>
        </div>
      </div>
    );
  }
}

export default Projects;