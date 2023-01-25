import React, { Component } from 'react';
import cardTrunfo from '../images/card-trunfo.png';
import filipeTunes from '../images/filipe-tunes.png';
import onlineStore from '../images/onlineStore.png';
import PrevTempo from '../images/prevTempo.png';
import wikiDisney from '../images/wiki-disney.png';

class Projects extends Component {
  render() {
    return (
      <div >
        <div className="projetos">
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
        <div className="projeto-container">
          <img
            src={wikiDisney}
            alt="wikiDIney"
           />
          <br />
          <a className="trunfo-link" href="https://wiki-disney.vercel.app/" target="_blank" rel="noreferrer">WikiDisney</a>
        </div>
        <div className="projeto-container">
          <img
            src={PrevTempo}
            alt="PrevTempo"
           />
          <br />
          <a className="trunfo-link" href="https://previ-tempo.vercel.app/" target="_blank" rel="noreferrer">PrevTempo</a>
        </div>
        <div className="projeto-container">
          <img
            src={onlineStore}
            alt="onlineStore"
           />
          <br />
          <a className="trunfo-link" href="https://online-store-group13.vercel.app/" target="_blank" rel="noreferrer">Online Store</a>
        </div>
        </div>
      </div>
    );
  }
}

export default Projects;