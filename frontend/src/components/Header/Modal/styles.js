import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 550px;
  position: absolute;
  right: 20px;
  top: 55px;
  background-color: ${(props) => props.color.cardColor};
  border-radius: 5px;
  border-top: 3px solid #3870ff;
  box-shadow: 0 1px 3px #00000070;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }

  > p {
    font-size: 16px;
    margin: auto;
    color: ${(props) => props.color.textColor};
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  padding: 15px;
  position: fixed;
  background-color: ${(props) => props.color.cardColor};

  h1 {
    font-size: 24px;
    color: ${(props) => props.color.textColor};
  }

  svg {
    display: none;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    svg {
      display: block;
      width: 35px;
      height: 35px;
      color: ${(props) => props.color.secondaryColor};
    }
  }
`;

export const Content = styled.ul`
  list-style: none;
  padding: 15px;
  margin-top: 50px;
`;

export const Message = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  img {
    height: 60px !important;
    width: 60px !important;
    border-radius: 50%;
    background-color: #ccc;
  }

  .info-notification {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    strong {
      color: ${(props) => props.color.textColor};
      font-size: 18px;
    }

    .description {
      color: ${(props) => props.color.textColor};
      font-size: 16px;
    }
  }

  #like {
    height: 25px;
    margin-left: auto;
  }
`;

export const Button = styled.div`
  background: 0;
  border: 0;
  cursor: pointer;
`;

export const Alert = styled.p`
  color: #8c8c8c;
`;
