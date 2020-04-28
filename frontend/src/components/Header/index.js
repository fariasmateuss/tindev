import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { ThemeContext } from '../../contexts/themeContext';

import Switch from 'react-switch';
import Modal from './Modal';

import { Container, Image, Actions, Button } from './styles';
import { MdNotifications, MdNotificationsActive } from 'react-icons/md';

import Logo from '../../assets/icon_logo.png';
import LogoName from '../../assets/logo.svg';

export default function Header({ notification, viewNewNotification, user }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [viewNotification, setViewNotification] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setAvatar(localStorage.getItem('user_avatar'));
  }, [avatar]);

  function handleViewNotification() {
    if (viewNotification === false) {
      setViewNotification(true);

      api
        .get('/notifications', {
          headers: { user },
        })
        .then((response) => {
          setNotifications(response.data.notifications);
          notification && viewNewNotification();
        });
    } else {
      setViewNotification(false);
      setNotifications([]);
    }
  }

  return (
    <Container border={theme.colors} background={theme.colors}>
      <Link to="/" id="link-main">
        <Image src={Logo} alt="logo" size="50" />
        <Image id="remove-icon" src={LogoName} alt="logo" size="35" />
      </Link>
      <Actions color={theme.colors}>
        {avatar && <img src={avatar} alt="user" />}
        <Button onClick={handleViewNotification}>
          {notification ? <MdNotificationsActive /> : <MdNotifications />}
        </Button>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={'#ddd'}
          onColor={theme.colors.primaryColor}
        />
      </Actions>
      {viewNotification && (
        <Modal
          theme={theme}
          notifications={notifications}
          close={handleViewNotification}
        />
      )}
    </Container>
  );
}
