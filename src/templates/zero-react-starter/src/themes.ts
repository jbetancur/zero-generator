// Modeled after material-ui's theming structure.
// https://material-ui.com/customization/default-theme/

import { DefaultTheme } from 'styled-components';

const baseTheme = {
	typography: {
		fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen',
	},
	palette: {
		common: {
			white: '#fff',
			black: '#000',
		},
		primary: {
			main: '#1976d2',
			light: '#4791db',
			dark: '#115293',
			contrastText: '#fff',
		},
		secondary: {
			main: '#dc004e',
			light: '#115293',
			dark: '#e33371',
			contrastText: '#fff',
		},
		error: {
			main: '#f44336',
			light: '#e57373',
			dark: '#d32f2f',
			contrastText: '#fff',
		},
		warning: {
			main: '#ff9800',
			light: '#ffb74d',
			dark: '#f57c00',
			contrastText: '#fff',
		},
		info: {
			main: '#2196f3',
			light: '#1976d2',
			dark: '#64b5f6',
			contrastText: '#fff',
		},
		success: {
			main: '#4caf50',
			light: '#388e3c',
			dark: '#81c784',
			contrastText: '#fff',
		},
	},
};

export const lightTheme: DefaultTheme = {
	...baseTheme,
	palette: {
		type: 'light',
		...baseTheme.palette,
		background: {
			default: '#FAFAFA',
			paper: '#424242',
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(255, 255, 255, 0.5)',
		},
		action: {
			disabled: 'rgba(0, 0, 0, 0.26)',
			active: 'rgba(0, 0, 0, 0.54)',
			selected: 'rgba(0, 0, 0, 0.08)',
			hover: 'rgba(0, 0, 0, 0.04)',
			disabledBackground: 'rgba(0, 0, 0, 0.12)',
		},
		divider: 'rgba(0, 0, 0, 0.12)',
	},
};

export const darkTheme: DefaultTheme = {
	...baseTheme,
	palette: {
		type: 'dark',
		...baseTheme.palette,
		background: {
			default: '#303030',
			paper: '#424242',
		},
		text: {
			primary: '#fff',
			secondary: 'rgba(255, 255, 255, 0.7)',
			disabled: 'rgba(255, 255, 255, 0.5)',
			hint: 'rgba(255, 255, 255, 0.5)',
		},
		action: {
			disabled: 'rgba(255, 255, 255, 0.5)',
			active: '#fff',
			selected: 'rgba(255, 255, 255, 0.16)',
			hover: 'rgba(255, 255, 255, 0.08)',
			disabledBackground: 'rgba(255, 255, 255, 0.12)',
		},
		divider: 'rgba(255, 255, 255, 0.12)',
	},
};
