import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 80px;
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const Alert = styled.h1`
  font-size: 32px;
  margin: auto;
  color: #999;
  font-weight: bold;
  margin-top: 300px;
`;
