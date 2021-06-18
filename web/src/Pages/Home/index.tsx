import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import './style.css';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <Link to="/">
            <img src={Logo} alt="Ecoleta" />
          </Link>
          <Link to="/create">
            <span></span>
            Cadastre um ponto de coleta
          </Link>
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <button>
            <span></span>
            <strong>Pesquisar pontos de coleta</strong>
          </button>
        </main>
      </div>
    </div>
  )
};

export default Home;