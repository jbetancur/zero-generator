// import original module declarations
import 'styled-components';

interface IPalette {
	light: string;
	main: string;
	dark: string;
	contrastText: string;
}

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		typography: {
			fontFamily: string;
		};
		background: {
			default: string;
			paper: string;
		};
		palette: {
			type: string;
			common: {
				white: string;
				black: string;
			},
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
			hint: string;
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
