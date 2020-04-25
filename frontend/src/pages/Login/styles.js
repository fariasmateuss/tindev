import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;

  img {
    max-width: 50px;
    align-self: center;
  }
`;

export const Input = styled.input`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;

  ::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border: 0;
  border-radius: 4px;
  height: 48px;
  font-size: 16px;
  background: 
  linear-gradient(0.25turn, #FD297B, #FF5864, #FF655B);
  font-weight: bold;
  color: #FFF;
  cursor: pointer;
`;