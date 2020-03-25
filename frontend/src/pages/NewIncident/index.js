import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { NewIncidentContainer } from './styles';

import logoImg from '../../assets/logo.svg';

function NewIncident(){
  return (
    <NewIncidentContainer>
      <div>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
        
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para Home
          </Link>

        </section>

        <form>
          <input placeholder="Titulo do caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em reais"/>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </NewIncidentContainer>
  )
}

export default NewIncident;