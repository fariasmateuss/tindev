import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from './global/globalStyle'

import { ThemeContext } from './contexts/themeContext';

import Login from "./pages/Login";
import Main from "./pages/Main";

export default function Routes() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <>
      <GlobalStyle theme={theme.colors}/>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/dev/:id" component={Main} />
      </BrowserRouter>
    </>
  );
}