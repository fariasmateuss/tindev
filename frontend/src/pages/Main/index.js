import React, { useEffect, useState, useContext } from 'react';
import io from 'socket.io-client';
import api from '../../services/api';
import { ThemeContext } from '../../contexts/themeContext'

import Header from '../../components/Header';
import Card from './CardUser'
import MatchModal from './MatchModal'

import { Container, Content, Alert } from  './styles'

export default function Main({ match }) {
  const { theme } = useContext(ThemeContext)
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);
  
  //useEffect que faz a chama API
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      })

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  //useEffect se conecta com o socket.io 
  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id }
    });

    socket.on('match', dev => {
      setMatchDev(dev);
    })
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id },
    })

    setUsers(users.filter(user => user._id !== id));
  }
  
  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id },
    })

    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <Container>
       <Header/>
      <Content>
        { users.length > 0 ? (
          <ul>
            {users.map(user => (
              <Card 
                key={user._id} 
                user={user} 
                styles={theme} 
                like={id => handleLike(id)} 
                dislike={id => handleDislike(id)} 
              />
            ))}
          </ul>
        ) : (
          <Alert>Acabou!</Alert>
        ) }
        { matchDev && (
          <MatchModal user={matchDev} onClose={() => setMatchDev(null)} />
        ) }
      </Content>
    </Container>
  )
}