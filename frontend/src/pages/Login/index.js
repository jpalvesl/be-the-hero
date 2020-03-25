import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { LoginContainer } from './styles';

import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';

function Login() {
  return (
    <LoginContainer>
      <section>
        <img src={LogoImg} alt="Be The Hero" />
        
        <form>
          <h1>Faça seu Login</h1>
          <input placeholder="Sua ID" />
          <button type="submit" >Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={HeroesImg} alt="Heores" />
    </LoginContainer>
  )
}

export default Login;