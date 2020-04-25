import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid ${props => props.border.borderColor};
  position: fixed;
  background-color: ${props => props.background.cardColor};

  #link-main {
    display: flex;
    align-items: center;
  }
`;

export const Image = styled.img`
  height: ${props => props.size}px;
`;