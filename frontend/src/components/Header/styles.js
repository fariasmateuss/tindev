import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid ${(props) => props.border.borderColor};
  position: fixed;
  background-color: ${(props) => props.background.cardColor};

  #link-main {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    #link-main #remove-icon {
      display: none;
    }
  }
`;

export const Image = styled.img`
  height: ${(props) => props.size}px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 15px;
    border: 2px solid #ffff;
  }

  svg {
    height: 40px;
    width: 40px;
    color: ${(props) => props.color.secondaryColor};
    margin-right: 15px;
  }
`;

export const Button = styled.button`
  background: 0;
  border: 0;
  cursor: pointer;
`;
