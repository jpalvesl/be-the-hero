import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { LoginContainer } from './styles';
import { theme } from '../../styles/theme';

import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';

function Login() {
  const [id, setID] = useState('')

  const history = useHistory()

  async function handleLogin(event) {
    event.preventDefault()

    try{
      const response = await api.post('/sessions', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName' ,response.data.name)
      history.push('/profile')
    } catch(err) {
      alert('Falha no login')
    }
  }

  return (
    <LoginContainer>
      <section>
        <img src={LogoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>
          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setID(e.target.value)}
          />
          <button className="button" type="submit" >Entrar</button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color={theme.primary.fill}/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={HeroesImg} alt="Heores" />
    </LoginContainer>
  )
}

export default Login;