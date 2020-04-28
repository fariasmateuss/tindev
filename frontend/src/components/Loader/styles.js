import styled, { keyframes } from 'styled-components';

export const Animate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin: auto;
  border: 5px solid rgba(0, 0, 0, 0.2);
  border-left-color: ${(props) => props.color};
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation: ${Animate} 1s linear infinite;
`;
