import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font: 400 14px Roboto, sans-serif;
    background-color: ${theme.primary.bg};
    color: ${theme.primary.text};
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  html {
    scroll-behavior: smooth;
  }

  input, button, textarea {
    font: 400 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: ${theme.primary.text};
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  .back-link {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${theme.primary.text};
    font-size: 18px;
    text-decoration: none;
    font-weigth: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
    
    svg {
      margin-right: 8px;
    }
  }
}
`;