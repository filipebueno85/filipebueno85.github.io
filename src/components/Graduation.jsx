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
          <img src="https://www.betrybe.com/static/images/logo-negative-green.svg" alt="" />
          <p>Desenvolvimento Web - Trybe - Set 2022 - Set 2023</p>
        </div>
      </div>
    );
  }
}

export default Graduation;
