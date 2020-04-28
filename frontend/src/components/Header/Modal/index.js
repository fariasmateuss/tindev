import React from 'react';

import { Container, Header, Content, Message, Button, Alert } from './styles';
import { MdClose } from 'react-icons/md';

export default function Modal({ theme, notifications, close }) {
  return (
    <Container color={theme.colors}>
      <Header color={theme.colors}>
        <h1>Notificações</h1>
        <Button onClick={() => close()}>
          <MdClose />
        </Button>
      </Header>
      {notifications.length > 0 ? (
        <Content>
          {notifications.map((notification) => (
            <Message key={notification._id} color={theme.colors}>
              <img src={notification.liked_user_id.avatar} alt="user" />
              <div className="info-notification">
                <strong>
                  {notification.objective === 0
                    ? notification.liked_user_id.name
                    : "It's a Match!"}
                </strong>
                <p className="description">
                  {notification.objective === 0
                    ? 'Curtiu você'
                    : `Você deu match com ${notification.liked_user_id.name}`}
                </p>
                {notification.view === false && <Alert>Não lido</Alert>}
              </div>
            </Message>
          ))}
        </Content>
      ) : (
        <p>Não há notificações por enquanto.</p>
      )}
    </Container>
  );
}
