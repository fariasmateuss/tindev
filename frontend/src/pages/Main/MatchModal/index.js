import React from 'react';

import { Container, Avatar, Button } from './styles';
import itsamatch from '../../../assets/itsamatch.png';

export default function Match({ user, onClose }) {
  return (
    <Container>
      <img src={itsamatch} alt="It's a match"/>
      <Avatar src={user.avatar} alt=""/>
      <strong>{user.name}</strong>
      <p>{user.bio}</p>
      <Button type= "button" onClick={onClose}>FECHAR</Button>
    </Container>
  );
}
