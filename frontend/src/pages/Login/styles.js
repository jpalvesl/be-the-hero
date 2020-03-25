import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content:center;

  section {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;

    form {
      margin-top: 100px;

      h1 {
        font-size: 32px;
        margin-bottom: 32px;
      }

      a {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: ${theme.primary.text};
        font-size: 18px;
        text-decoration: none;
        font-weigth: 500;

        svg {
          margin-right: 8px;
        }
      }

      button {
        width: 100%;
        height: 60px;
        background-color: ${theme.primary.fill};
        color: ${theme.secundary.text};
        border: 0;
        border-radius: 8px;
        font-weight: bold;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(80%);
        }
      }
    }
  }



`; 