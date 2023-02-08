import React, { Component } from 'react';
import Footer from '../components/Footer';
import Graduation from '../components/Graduation';
import Habilidades from '../components/Habilidades';
import Header from '../components/Header';
import ProfileDescription from '../components/ProfileDescription';
import fotoPerfil from '../images/foto-portfolio1.png';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div>
        <div className="profile">
        <img 
        style={{ width: "200px", 
        height: "200px", 
        borderRadius: "100%",
       }} 
        src={fotoPerfil} 
        alt="foto-filipe" 
        />
        <ProfileDescription />
        </div>
        <Habilidades />
        <Graduation />
        <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
