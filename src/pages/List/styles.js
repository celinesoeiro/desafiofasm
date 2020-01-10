import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  flex-direction: column;
  text-align: center;
  margin: 15px;

  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    margin: 10px;

    & + li {
      border-top: 0px solid #ec6c04;
    }

    span {
      color: #333;
      text-align: center;
      font-size: 14px;
    }
  }

  a {
    color: #fff;
    margin: 15px;
    font-size: 16px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
