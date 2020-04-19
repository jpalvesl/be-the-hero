import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import { ProfileContainer } from './styles';
import { theme } from '../../styles/theme';

import logoImg from '../../assets/logo.svg';

function Profile() {
  const [incidents, setIncidents] = useState([])

  const hisrory = useHistory()

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')


  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(res => {
      setIncidents(res.data)
    })
  }, [ongId])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(incidents.filter(incident => (incident.id !== id)))
    } catch(err) {
      alert('Erro ao deletar caso, tente novamente')
    }
  }

  function handleLogout() {
    localStorage.clear()
    hisrory.push('/')
  }

  return (
    <ProfileContainer>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color={theme.primary.fill} />
        </button>
      </header>

      <h1>Casos cadastarados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
          <strong>Caso:</strong>
          <p>{incident.title}</p>

          <strong>Descrição</strong>
          <p>{incident.description}</p>

          <strong>Valor</strong>
          <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

          <button onClick={() => (handleDeleteIncident(incident.id))} type="button">
            <FiTrash2 size={20} color={theme.primary.trash} />
          </button>

        </li>
        ))}
      </ul>
    </ProfileContainer>
  ) 
}

export default Profile;