import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/themes';

const AllTheProviders = theme => ({ children }) => {
	const t = theme === 'light' ? lightTheme : darkTheme;

	return <ThemeProvider theme={t}>{children}</ThemeProvider>;
};

const renderWithTheme = (ui, options) => (theme = 'light') =>
	render(ui, { wrapper: AllTheProviders(theme), ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithTheme };
