import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global-styles'
import ChangeTheme from './components/ChangeTheme';
import Routes from './routes';

import light from './styles/themes/light-theme'
import dark from './styles/themes/dark-theme'
import usePersisted from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersisted('theme', light);

  function toogleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ChangeTheme toogleTheme={toogleTheme} />
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
