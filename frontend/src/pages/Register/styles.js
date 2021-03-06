import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-center;

  
  & > div {
    width: 100%;
    padding: 96px;
    background: ${theme.primary.bg};
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    section {
      width: 100%;
      max-width: 380px;
  
      h1 {
        margin: 64px 0 32px;
        font-size: 32px;
      }
  
      p {
        font-size: 16px;
        color: #737380;
        line-height:32px;
      }
    }

    form {
      width: 100%;
      max-width: 450px;

      input, select {
        margin-top: 8px;
        
        /* removing arrow in the inputs with suggestions */
        &::-webkit-calendar-picker-indicator {
          display: none;
        }
      }

      div {
        display: flex;

        select + select {
          margin-left: 8px;
        }
      }
    }
  }
`;