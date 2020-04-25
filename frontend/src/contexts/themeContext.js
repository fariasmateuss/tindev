import React, {createContext, useState, useEffect} from 'react';
import lightMode from '../themes/light';
import darkMode from '../themes/dark';

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => initState());

  function initState() {
    return JSON.parse(localStorage.getItem('theme')) || lightMode
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkMode : lightMode)
  }
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;