import React, { Component } from 'react';
import appReceitas from '../images/appReceitas.png';
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
              height={ '200px' }
              src={appReceitas}
              alt="appReceitas"
            />
            <p>O App de Receitas é um aplicativo onde você encontra diversas receitas de comidas e drinks, simulando um livro de receitas que todo mundo gostaria de ter em casa! Na aplicação você consegue realizar uma pesquisa por ingredientes, pelo nome de uma receita e pela primeira letra do nome de uma receita. É possível favoritar essa receita e também fazer o checklist dos ingredientes enquanto o usuário executa sua receita!</p>
            <div className="habilidades-container-project">
            <div className="logos">
              <img style={ { width:  '60px' } } src="https://logospng.org/download/javascript/logo-javascript-icon-256.png" alt="javascript" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="css" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/html-5/logo-html-5-256.png" alt="html" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/react/logo-react-256.png" alt="react" />
            </div>
            </div>
      
            <a className="trunfo-link" href="https://online-store-group13.vercel.app/" target="_blank" rel="noreferrer">App de Receitas </a>
          </div>
          <div className="projeto-container">
            <img
              height={ '200px' }
              src={onlineStore}
              alt="onlineStore"
            />
            <p>A aplicação é uma simulação de um e-commerce, sendo possível realizar um produto específico e também filtrando por categorias. Você pode adicionar e remover produtos do carrinho de compras. Clique no link abaixo para acessar a aplicação.</p>
            <div className="habilidades-container-project">
            <div className="logos">
              <img style={ { width:  '60px' } } src="https://logospng.org/download/javascript/logo-javascript-icon-256.png" alt="javascript" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="css" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/html-5/logo-html-5-256.png" alt="html" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/react/logo-react-256.png" alt="react" />
            </div>
            </div>
            <a className="trunfo-link" href="https://online-store-group13.vercel.app/" target="_blank" rel="noreferrer">Online Store</a>
          </div>
          <div className="projeto-container">
            <img
              height={ '200px' }
              src={carteiraDigital}
              alt="Carteira Digital"
            />
            <p>Mais um desafio construir essa aplicação, usando React e Redux, a aplicação trata-se de uma carteira digital. Você consegue adicionar despesas e converter o valor para outra moeda, sendo possível editar essa despesa e também excluir.</p>
            <div className="habilidades-container-project">
            <div className="logos">
              <img style={ { width:  '60px' } } src="https://logospng.org/download/javascript/logo-javascript-icon-256.png" alt="javascript" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="css" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/html-5/logo-html-5-256.png" alt="html" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/react/logo-react-256.png" alt="react" />
              <img style={ { width:  '60px' } } src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="react" />
            </div>
            </div>
            {/* <br /> */}
            <a className="trunfo-link" href="https://carteira-digital-filipebueno85.vercel.app/" target="_blank" rel="noreferrer">Carteira Digital</a>
          </div>
          <div className="projeto-container">
            <img
              height={ '200px' }
              src={cardTrunfo}
              alt="card-trunfo"
            />
            <p>A aplicação trata-se de um jogo tipo SuperTrunfo, você pode criar seu próprio baralho de acordo com seus personagens favoritos!</p>
            <div className="habilidades-container-project">
            <div className="logos">
              <img style={ { width:  '60px' } } src="https://logospng.org/download/javascript/logo-javascript-icon-256.png" alt="javascript" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="css" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/html-5/logo-html-5-256.png" alt="html" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/react/logo-react-256.png" alt="react" />
            </div>
            </div>
            {/* <br /> */}
            <a className="trunfo-link" href="https://card-trunfo-p55g.vercel.app/" target="_blank" rel="noreferrer">Card Trunfo</a>
          </div>
          <div className="projeto-container">
            <img
              height={ '200px' }
              src={filipeTunes}
              alt="card-trunfo"
            />
            <p>No Filipe Tunes você consegue buscar seu artista favorito, escutar o trecho de de uma faixa musical, sendo possível favoritar uma música!</p>
            <div className="habilidades-container-project">
            <div className="logos">
              <img style={ { width:  '60px' } } src="https://logospng.org/download/javascript/logo-javascript-icon-256.png" alt="javascript" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="css" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/html-5/logo-html-5-256.png" alt="html" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/react/logo-react-256.png" alt="react" />
            </div>
            </div>
            {/* <br /> */}
            <a className="trunfo-link" href="https://filipe-tunes.vercel.app/" target="_blank" rel="noreferrer">Filipe Tunes</a>
          </div>
          <div className="projeto-container">
            <img
              height={ '200px' }
              src={wikiDisney}
              alt="wikiDIney"
            />
            <p>Nesta aplicação você consegue pesquisar um personagem da Disney, seja de qualquer filme.

              O resultado da pesquisa contém filmes, series, games que o personagem aparece.

              O conteúdo é de uma API com personagens da Disney.</p>
              <div className="habilidades-container-project">
            <div className="logos">
              <img style={ { width:  '60px' } } src="https://logospng.org/download/javascript/logo-javascript-icon-256.png" alt="javascript" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="css" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/html-5/logo-html-5-256.png" alt="html" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/react/logo-react-256.png" alt="react" />
            </div>
            </div>
            {/* <br /> */}
            <a className="trunfo-link" href="https://wiki-disney.vercel.app/" target="_blank" rel="noreferrer">WikiDisney</a>
          </div>
          <div className="projeto-container">
            <img
              height={ '200px' }
              src={PrevTempo}
              alt="PrevTempo"
            />
            <p>No PrevTempo você consegue pesquisar qualquer cidade do Brasil, para saber a previsão do dia e podendo ver para os próximos 10 dias.</p>
            <div className="habilidades-container-project">
            <div className="logos">
              <img style={ { width:  '60px' } } src="https://logospng.org/download/javascript/logo-javascript-icon-256.png" alt="javascript" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="css" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/html-5/logo-html-5-256.png" alt="html" />
              <img style={ { width:  '60px' } } src="https://logospng.org/download/react/logo-react-256.png" alt="react" />
            </div>
            </div>
            {/* <br /> */}
            <a className="trunfo-link" href="https://previ-tempo.vercel.app/" target="_blank" rel="noreferrer">PrevTempo</a>
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;