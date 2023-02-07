import React, { Component } from 'react';
import cardTrunfo from '../images/card-trunfo.png';
import carteiraDigital from '../images/carteira-digital.png';
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
            <p>A aplicação trata-se de um jogo tipo SuperTrunfo, você pode criar seu próprio baralho de acordo com seus personagens favoritos!</p>
            <br />
            <a className="trunfo-link" href="https://card-trunfo-p55g.vercel.app/" target="_blank" rel="noreferrer">Card Trunfo</a>
          </div>
          <div className="projeto-container">
            <img
              src={filipeTunes}
              alt="card-trunfo"
            />
            <p>No Filipe Tunes você consegue buscar seu artista favorito, escutar o trecho de de uma faixa musical, sendo possível favoritar uma música!</p>
            <br />
            <a className="trunfo-link" href="https://filipe-tunes.vercel.app/" target="_blank" rel="noreferrer">Filipe Tunes</a>
          </div>
          <div className="projeto-container">
            <img
              src={wikiDisney}
              alt="wikiDIney"
            />
            <p>Nesta aplicação você consegue pesquisar um personagem da Disney, seja de qualquer filme.

              O resultado da pesquisa contém filmes, series, games que o personagem aparece.

              O conteúdo é de uma API com personagens da Disney.</p>
            <br />
            <a className="trunfo-link" href="https://wiki-disney.vercel.app/" target="_blank" rel="noreferrer">WikiDisney</a>
          </div>
          <div className="projeto-container">
            <img
              src={PrevTempo}
              alt="PrevTempo"
            />
            <p>No PrevTempo você consegue pesquisar qualquer cidade do Brasil, para saber a previsão do dia e podendo ver para os próximos 10 dias.</p>
            <br />
            <a className="trunfo-link" href="https://previ-tempo.vercel.app/" target="_blank" rel="noreferrer">PrevTempo</a>
          </div>
          <div className="projeto-container">
            <img
              src={onlineStore}
              alt="onlineStore"
            />
            <p>A aplicação é uma simulação de um e-commerce, sendo possível realizar um produto específico e também filtrando por categorias. Você pode adicionar e remover produtos do carrinho de compras. Clique no link abaixo para acessar a aplicação.</p>
            <br />
            <a className="trunfo-link" href="https://online-store-group13.vercel.app/" target="_blank" rel="noreferrer">Online Store</a>
          </div>
          <div className="projeto-container">
            <img
              src={PrevTempo}
              alt="PrevTempo"
            />
            <p>No PrevTempo você consegue pesquisar qualquer cidade do Brasil, para saber a previsão do dia e podendo ver para os próximos 10 dias.</p>
            <br />
            <a className="trunfo-link" href="https://previ-tempo.vercel.app/" target="_blank" rel="noreferrer">PrevTempo</a>
          </div>
          <div className="projeto-container">
            <img
              src={carteiraDigital}
              alt="Carteira Digital"
            />
            <p>Mais um desafio construir essa aplicação, usando React e Redux, a aplicação trata-se de uma carteira digital. Você consegue adicionar despesas e converter o valor para outra moeda, sendo possível editar essa despesa e também excluir.</p>
            <br />
            <a className="trunfo-link" href="https://carteira-digital-filipebueno85.vercel.app/" target="_blank" rel="noreferrer">Carteira Digital</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;