import React from 'react';
import Routes from './routes';

import ThemeProvider from './contexts/themeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
