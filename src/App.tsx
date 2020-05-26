import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { lightTheme, darkTheme } from './themes';
import ToggleTheme from './components/ToggleTheme';
import { useDarkMode } from './hooks/useDarkMode';

const App: React.FC = () => {
  const { theme, toggleTheme, componentMounted } = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
