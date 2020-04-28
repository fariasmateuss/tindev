import React, { useState } from 'react';
import api from '../../services/api';

import { Container, Form, Input, Button } from './styles';
import Load from '../../components/Loader';
import logo from '../../assets/icon_logo.png';

export default function Login({ history }) {
  const [username, setUsername] = useState('');
  const [load, setLoad] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    setLoad(true);

    const response = await api.post('/devs', {
      username,
    });

    const { _id, avatar } = response.data;
    localStorage.setItem('user_avatar', avatar);

    history.push(`/dev/${_id}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <Input
          placeholder="Digite seu usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit">
          {load ? <Load color="#fff" size="27" /> : 'Enviar'}
        </Button>
      </Form>
    </Container>
  );
}
