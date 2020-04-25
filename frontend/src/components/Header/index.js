import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from '../../contexts/themeContext';

import { Container, Image } from './styles';
import Logo from '../../assets/icon_logo.png';
import LogoName from '../../assets/logo.svg'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Container border={theme.colors} background={theme.colors}>
      <Link to="/" id="link-main">
        <Image src={Logo} alt="logo" size="50" />
        <Image src={LogoName} alt="logo" size="35" />
      </Link>
      <Switch 
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={'#ddd'}
        onColor={theme.colors.primaryColor}
      />
    </Container>
  );
}
