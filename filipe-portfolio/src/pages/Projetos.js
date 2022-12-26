import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import cardTrunfo from '../images/card-trunfo.png';
import filipeTunes from '../images/filipe-tunes.png';

class Projetos extends Component {
  render() {
    return (
      <div>
       <Header />
       <div>
       <img 
       src={cardTrunfo} 
       alt="card-trunfo"
       style={ {width: '500px'} } />
       <br />
       <a className="trunfo-link" href="https://card-trunfo-p55g.vercel.app/" target="_blank" rel="noreferrer">Card Trunfo</a>
       </div>
       <div>
       <img 
       src={filipeTunes} 
       alt="card-trunfo"
       style={ {width: '500px'} } />
       <br />
       <a className="trunfo-link" href="https://filipe-tunes.vercel.app/" target="_blank" rel="noreferrer">Filipe Tunes</a>
       </div>

      </div>
    );
  }
}

export default Projetos;