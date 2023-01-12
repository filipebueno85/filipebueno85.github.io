import React, { Component } from 'react';

class Graduation extends Component {
  render() {
    return (
      <div className="graduation-container">
        <h2>Graduação</h2>
        <div>
          <img
            src="https://portal.anhembi.br/wp-content/uploads/2021/12/logo-anhembi-largo.svg"
            alt="logo-trybe" />
          <p>Negócios da Moda - Universidade Anhembi Morumbi</p>
        </div>
        <div>
          <img style={ {width: '100px'}} src="https://theme.zdassets.com/theme_assets/9633455/ecf228e8c15da1a8bd07f574e675a0ac59330968.png" alt="" />
          <p>Desenvolvimento Web - Trybe - Set 2022 - Set 2023</p>
        </div>
      </div>
    );
  }
}

export default Graduation;
