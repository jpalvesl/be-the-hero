import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const NewIncidentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  
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
        color: ${theme.primary.paragraph};
        line-height:32px;
      }
    }

    form {
      width: 100%;
      max-width: 450px;

      input, textarea {
        margin-top: 8px;
      }

      /*  removing arrows in the input type number */
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
      }
    }
  }
`;