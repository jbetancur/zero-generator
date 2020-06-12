import { DefaultTheme } from 'styled-components';

const baseTheme = {
	fonts: {
		body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen',
	},
	palette: {
		white: '#fff',
		black: '#000',
		primary: {
			main: '#1976d2',
			lighter: '#4791db',
			darker: '#115293',
			contrastText: '#fff',
		},
		secondary: {
			main: '#dc004e',
			lighter: '#115293',
			darker: '#e33371',
			contrastText: '#fff',
		},
		error: {
			main: '#f44336',
			lighter: '#e57373',
			darker: '#d32f2f',
			contrastText: '#fff',
		},
		warning: {
			main: '#ff9800',
			lighter: '#ffb74d',
			darker: '#f57c00',
			contrastText: '#fff',
		},
		info: {
			main: '#2196f3',
			lighter: '#1976d2',
			darker: '#64b5f6',
			contrastText: '#fff',
		},
		success: {
			main: '#4caf50',
			lighter: '#388e3c',
			darker: '#81c784',
			contrastText: '#fff',
		},
	},
};

export const lightTheme: DefaultTheme = {
	...baseTheme,
	background: {
		default: '#FAFAFA',
		paper: '#424242',
	},
	text: {
		primary: 'rgba(0, 0, 0, 0.87)',
		secondary: 'rgba(0, 0, 0, 0.54)',
		disabled: 'rgba(0, 0, 0, 0.38)',
	},
	action: {
		disabled: 'rgba(0, 0, 0, 0.26)',
		active: 'rgba(0, 0, 0, 0.54)',
		selected: 'rgba(0, 0, 0, 0.08)',
		hover: 'rgba(0, 0, 0, 0.04)',
		disabledBackground: 'rgba(0, 0, 0, 0.12)',
	},
	divider: 'rgba(0, 0, 0, 0.12)',
};

export const darkTheme: DefaultTheme = {
	...baseTheme,
	background: {
		default: '#303030',
		paper: '#424242',
	},
	text: {
		primary: '#fff',
		secondary: 'rgba(255, 255, 255, 0.7)',
		disabled: 'rgba(255, 255, 255, 0.5)',
	},
	action: {
		disabled: 'rgba(255, 255, 255, 0.5)',
		active: '#fff',
		selected: 'rgba(255, 255, 255, 0.16)',
		hover: 'rgba(255, 255, 255, 0.08)',
		disabledBackground: 'rgba(255, 255, 255, 0.12)',
	},
	divider: 'rgba(255, 255, 255, 0.12)',
};
