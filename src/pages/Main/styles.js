import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  flex-direction: column;
  text-align: center;
  margin: 15px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: 10px auto 20px;
  }

  h1 {
    font-size: 20px;
    color: #fff;
    flex-direction: row;
    align-items: center;
  }

  h2 {
    font-size: 15px;
    color: #fff;
    flex-direction: row;
    align-items: center;
    margin: 0 auto 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 30px auto 15px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #777;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#777')};
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
