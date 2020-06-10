import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import { lightTheme, darkTheme } from './themes';
import ToggleTheme from './components/ToggleTheme';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';

const App: React.FC = () => {
	const { theme, toggleTheme, componentMounted } = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!componentMounted) {
		return <div />;
	}

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyle />
			<main>
				{/* Header is sample component */}
				<Header>
					<h2>React Boilerplate</h2>
					<ToggleTheme theme={theme} toggleTheme={toggleTheme} />
				</Header>
				<p>
					Start editing <code>src/App.tsx</code> and save to reload.
				</p>
			</main>
		</ThemeProvider>
	);
};

export default App;
