import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import { NewIncidentContainer } from './styles';
import { theme } from '../../styles/theme';

import logoImg from '../../assets/logo.svg';

function NewIncident(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')

  async function handleNewIncident(event){
    event.preventDefault()

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente')
    }

  }

  return (
    <NewIncidentContainer>
      <div>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
        
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color={theme.primary.fill}/>
            Voltar para Home
          </Link>

        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            type="number"
            min='1' 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </NewIncidentContainer>
  )
}

export default NewIncident;