import React from 'react';
import { Link } from 'react-router-dom';

import api from '../../Services/api';
import GoogleMap from '../../Components/Maps';

import Logo from '../../assets/logo.svg';
import Lampadas from '../../assets/Lampadas.svg';
import './style.css';

const Create: React.FC = () => {
  return (
    <div id="create-page">
      <div className="content">
        <header>
          <Link to="/">
            <img src={Logo} alt="Ecoleta" />
          </Link>
          <Link to="/">
            <span></span>
            Voltar para home
          </Link>
        </header>

        <form>
          <h1>Cadastro do<br />ponto de coleta</h1>

          <fieldset>
            <legend>
              <h2>Dados da entidade</h2>
            </legend>

            <div className="field">
              <label htmlFor="name">Nome da entidade</label>
              <input name="name" id="name" />
            </div>
            <div className="field-group">
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input name="email" id="email" />
              </div>
              <div className="field field-cut">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input name="whatsapp" id="whatsapp" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Endereço</h2>
              <span>Confirme o endereço no mapa</span>
            </legend>

            <GoogleMap />
            <div className="field-group">
              <div className="field field-cut">
                <label htmlFor="cep">Cep</label>
                <input name="cep" id="cep" />
              </div>
              <div className="field">
                <label htmlFor="address">Endereço</label>
                <input name="address" id="address" />
              </div>
            </div>
            <div className="field-group">
              <div className="field field-cut">
                <label htmlFor="number">Numero</label>
                <input name="number" id="number" />
              </div>
              <div className="field">
                <label htmlFor="district">Bairro</label>
                <input name="district" id="district" />
              </div>
            </div>
            <div className="field-group">
              <div className="field">
                <label htmlFor="state">Estado</label>
                <input name="state" id="state" />
              </div>
              <div className="field">
                <label htmlFor="city">Cidade</label>
                <input name="city" id="city" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="complement">Complemento</label>
              <input name="complement" id="complement" />
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Ítens de coleta</h2>
              <span>Selecione um ou mais ítens abaixo</span>
            </legend>

            <ul className="items-group">
              <li>
                <img src={Lampadas} alt="titulo aqui" />
                <span>titulo aqui</span>
              </li>
              <li>
                <img src={Lampadas} alt="titulo aqui" />
                <span>titulo aqui</span>
              </li>
              <li className="selected">
                <img src={Lampadas} alt="titulo aqui" />
                <span>titulo aqui</span>
              </li>
              <li className="selected">
                <img src={Lampadas} alt="titulo aqui" />
                <span>Resíduos Eletrônicos</span>
              </li>
              <li>
                <img src={Lampadas} alt="titulo aqui" />
                <span>titulo aqui</span>
              </li>
              <li>
                <img src={Lampadas} alt="titulo aqui" />
                <span>titulo aqui</span>
              </li>
            </ul>
          </fieldset>
          <button type="submit">
            Cadastrar ponto de coleta
          </button>
        </form>
      </div>
    </div>
  )
}

export default Create;