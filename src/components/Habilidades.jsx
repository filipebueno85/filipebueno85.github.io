import React, { Component } from 'react';

class Habilidades extends Component {
  render() {
    return (
      <div className="habilidades-container">
        <h2 className="habilidades_titulo">Habilidades</h2>
        <div className="logos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715" alt="githublogo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/640px-Git-logo.svg.png" alt="git" />
        <img src="https://logospng.org/download/javascript/logo-javascript-icon-256.png" alt="javascript" />
        <img src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="css" />
        <img src="https://logospng.org/download/html-5/logo-html-5-256.png" alt="html" />
        <img src="https://logospng.org/download/react/logo-react-256.png" alt="react" />
        <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="redux" />
        <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Adobe-Photoshop-Logo-650x366.png" alt="photoshop" />
        <img src="https://logodownload.org/wp-content/uploads/2017/04/adobe-Illustrator-logo-0-1-2048x2048.png" alt="illustrator" />
        <img src="https://www.coreldraw.com/static/cdgs/images/pages/product-info-sheet/key-img.png" alt="coreldraw" />
        </div>
        {/* <ul>
          <li>Unix</li>
          <li>GitHub</li>
          <li>Git</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>React</li>
          <li>HTML</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Corel Draw</li>
        </ul> */}
      </div>
    );
  }
}

export default Habilidades;
