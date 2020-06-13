import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { lightTheme, darkTheme } from './themes';
import ToggleTheme from './components/ToggleTheme';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';

const App: React.FC = () => {
	const { theme, toggleTheme, componentMounted } = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!componentMounted) {
		return <div />;
	}

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyle />
			<Router>
				<main>
					<Header title="React Boilerplate">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<ToggleTheme theme={theme} toggleTheme={toggleTheme} />
					</Header>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
					</Switch>
				</main>
			</Router>
		</ThemeProvider>
	);
};

export default App;
