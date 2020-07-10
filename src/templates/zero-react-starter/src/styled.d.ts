// import original module declarations
import 'styled-components';

export interface PaletteColors {
	light: string;
	main: string;
	dark: string;
	contrastText: string;
}

export type PaletteTypes = 'light' | 'dark' | undefined;

export interface PaletteOptions {
	type: PaletteTypes;
	common: {
		white: string;
		black: string;
	};
	primary: PaletteColors;
	secondary: PaletteColors;
	error: PaletteColors;
	warning: PaletteColors;
	info: PaletteColors;
	success: PaletteColors;
}

export interface Text {
	primary: string;
	secondary: string;
	disabled: string;
	hint: string;
}

export interface Action {
	disabled: string;
	active: string;
	selected: string;
	hover: string;
	disabledBackground: string;
}

export interface Background {
	default: string;
	paper: string;
}

export interface Typography {
	fontFamily: string;
}

// allow types to work with styled
declare module 'styled-components' {
	export interface DefaultTheme {
		typography: Typography;
		background: Background;
		palette: PaletteOptions;
		text: Text;
		action: Action;
		divider: string;
	}
}
