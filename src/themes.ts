import { DefaultTheme } from 'styled-components';

const baseTheme = {
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen',
  },
  palette: {
    primary: {
      main: '#1976d2',
      light: '#4791db',
      dark: '#115293',
    },
    secondary: {
      main: '#dc004e',
      light: '#115293',
      dark: '#e33371',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    info: {
      main: '#2196f3',
      light: '#1976d2',
      dark: '#64b5f6',
    },
    success: {
      main: '#4caf50',
      light: '#388e3c',
      dark: '#81c784',
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
