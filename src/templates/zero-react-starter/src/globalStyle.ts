import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
