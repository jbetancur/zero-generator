// Credit: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
import { useEffect, useState } from 'react';

interface IDarkmode {
	theme: string;
	toggleTheme(): void;
	componentMounted: boolean;
}

type Hook = () => IDarkmode;

export const useDarkMode: Hook = () => {
	const [theme, setTheme] = useState<string>('light');
	const [componentMounted, setComponentMounted] = useState<boolean>(false);
	const setMode = (mode: string) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const toggleTheme = () => {
		if (theme === 'light') {
			setMode('dark');
		} else {
			setMode('light');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');

		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches &&
		!localTheme
			? setMode('dark')
			: localTheme
			? setTheme(localTheme)
			: setMode('light');
		setComponentMounted(true);
	}, []);

	return { theme, toggleTheme, componentMounted };
};
