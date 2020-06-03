import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import { RegisterContainer } from './styles';
import { theme } from '../../styles/theme';

import logoImg from '../../assets/logo.svg';

import cities from '../../assets/data/cities.json';
import states from '../../assets/data/states.json';


function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('/ongs', data)

      alert(`Seu ID de acesso ${response.data.id}`)
      history.push('/')
    } catch(err) {
      alert('Erro no cadastro, tente novamente')
    }

  }

  function stateObject() {
    const ufObject = states.filter((state) => (state.Sigla === uf))
    return ufObject[0]
  }

  function citiesFiltered() {
    const ufObject = stateObject()

    if (ufObject) {
      return cities.filter((city) => (city.Estado === ufObject.ID))
    }
    return []
  }


  return (
    <RegisterContainer>
      <div>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
        
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color={theme.primary.fill}/>
            Já tenho cadastro
          </Link>

        </section>

        <form onSubmit={handleRegister} >
          <input 
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div>
            <input 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
              list="city-list"
            />

            <datalist id="city-list">
              {citiesFiltered().map((city) => (
                <option key={`${city.ID}_${city.Estado}`} value={city.Nome} ></option>
              ))}
            </datalist>

            <input 
            placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
              list="uf-list"
            />

            <datalist id="uf-list">
              {states.map((uf) => (
                <option value={uf.Sigla} ></option>
              ))}
            </datalist>
          </div>

          <button className='button' type="submit">Cadastrar</button>
        </form>
      </div>
    </RegisterContainer>
  )
}

export default Register;