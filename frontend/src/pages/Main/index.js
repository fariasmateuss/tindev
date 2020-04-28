import React, { useEffect, useState, useContext } from 'react';
import io from 'socket.io-client';
import api from '../../services/api';
import { ThemeContext } from '../../contexts/themeContext';

import Header from '../../components/Header';
import Card from './CardUser';
import MatchModal from './MatchModal';

import { Container, Content, Alert } from './styles';

export default function Main({ match }) {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);
  const [newNotification, setNewNotification] = useState(false);

  //useEffect que faz a chama API
  useEffect(() => {
    api
      .get('/devs', {
        headers: {
          user: match.params.id,
        },
      })
      .then((response) => {
        setNewNotification(response.data.notification);
        setUsers(response.data.users);
      });
  }, [match.params.id]);

  //useEffect se conecta com o socket.io
  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id },
    });

    socket.on('match', (dev) => {
      setMatchDev(dev);
    });

    socket.on('notification', () => {
      setNewNotification(true);
    });
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter((user) => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter((user) => user._id !== id));
  }

  async function handleViewNotification() {
    setNewNotification(false);
    await api.put('/notifications', null, {
      headers: { user: match.params.id },
    });
  }

  return (
    <Container>
      <Header
        notification={newNotification}
        viewNewNotification={handleViewNotification}
        user={match.params.id}
      />
      <Content>
        {users.length > 0 ? (
          <ul id="card-users">
            {users.map((user) => (
              <Card
                key={user._id}
                user={user}
                styles={theme}
                like={(id) => handleLike(id)}
                dislike={(id) => handleDislike(id)}
              />
            ))}
          </ul>
        ) : (
          <Alert>Não há perfis ainda.</Alert>
        )}
        {matchDev && (
          <MatchModal user={matchDev} onClose={() => setMatchDev(null)} />
        )}
      </Content>
    </Container>
  );
}
