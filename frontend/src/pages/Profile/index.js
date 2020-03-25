import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { ProfileContainer } from './styles';

import logoImg from '../../assets/logo.svg';

function Profile() {
  return (
    <ProfileContainer>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>


        
        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastarados</h1>
      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição</strong>
          <p>Descrição teste</p>

          <strong>Valor</strong>
          <p>120</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>

        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição</strong>
          <p>Descrição teste</p>

          <strong>Valor</strong>
          <p>120</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>

        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição</strong>
          <p>Descrição teste</p>

          <strong>Valor</strong>
          <p>120</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>

        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição</strong>
          <p>Descrição teste</p>

          <strong>Valor</strong>
          <p>120</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>

        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição</strong>
          <p>Descrição teste</p>

          <strong>Valor</strong>
          <p>120</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>

        </li>

        

      </ul>
    </ProfileContainer>
  ) 
}

export default Profile;