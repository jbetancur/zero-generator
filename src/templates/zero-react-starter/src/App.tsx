import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import { Switch, Route, Link } from 'react-router-dom';
import { lightTheme, darkTheme } from './themes';
import ToggleTheme from 'components/ToggleTheme';
import { useDarkMode } from 'hooks/useDarkMode';
import Header from 'components/Header';
import Home from 'views/Home';
import About from 'views/About';
import NotFound from 'components/NotFound';

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
				<Header title="Zero React Starter">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<ToggleTheme checked={theme === 'dark'} onClick={toggleTheme} />
				</Header>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route path="*" exact>
						<NotFound />
					</Route>
				</Switch>
			</main>
		</ThemeProvider>
	);
};

export default App;
