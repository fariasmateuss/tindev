import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  strong {
    font-size: 32px;
    color: #FFF;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 30px;
    max-width: 400px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #FFF;
  margin: 30px 0;
`;

export const Button = styled.button`
  border: 0;
  background: none;
  font-weight: bold;
  color: #FFF;
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
`;