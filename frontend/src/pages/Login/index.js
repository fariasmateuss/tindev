import React, { useState } from 'react';
import api from '../../services/api';

import { Container, Form, Input, Button } from './styles'
import logo from '../../assets/icon_logo.png';

export default function Login({ history }) {
  const [username, setUsername] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username,
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev"/>
        <Input
          placeholder="Digite seu usuário do Github" 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}
