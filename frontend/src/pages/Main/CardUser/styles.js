import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;

  > img {
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

export const Footer = styled.footer`
  flex: 1;
  background: ${(props) => props.color.cardColor};
  padding: 15px 20px;
  text-align: left;
  border-radius: 0 0 5px 5px;

  strong {
    font-size: 16px;
    color: ${(props) => props.color.primaryColor};
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.color.secondaryColor};
    margin-top: 5px;
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  height: 70px;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 5px;
  background: ${(props) => props.color.cardColor};
  cursor: pointer;
`;
