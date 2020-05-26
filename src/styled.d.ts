// import original module declarations
import 'styled-components';

interface IPalette {
  light: string;
  main: string;
  dark: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      body: string;
    };
    background: {
      default: string;
      paper: string;
    };
    palette: {
      primary: IPalette;
      secondary: IPalette;
      error: IPalette;
      warning: IPalette;
      info: IPalette;
      success: IPalette;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    action: {
      disabled: string;
      active: string;
      selected: string;
      hover: string;
      disabledBackground: string;
    };
    divider: string;
  }
}
