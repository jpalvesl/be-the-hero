import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;

    li {
      background: ${theme.secundary.bgBox};
      padding: 24px;
      border-radius: 8px;
      position: relative;

      strong {
        display: block;
        margin-bottom: 16px;
        color: ${theme.primary.strong};

        &:not(:first-child) {
          margin-top: 32px;
        }
      }

      p {
        color: ${theme.primary.paragraph};
        line-height: 21px
      }


      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: transparent;

        &:hover, &:focus {
          opacity: 0.8;
        }
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    
    span {
      font-size: 20px;
      margin-left: 24px;
    }

    img {
      height: 64px;
    }

    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
    }

    button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 2px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.2s;

      &:hover, &:focus {
        border-color: #999;
      }
    }
  }
`;