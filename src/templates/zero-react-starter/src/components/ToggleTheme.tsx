import React from 'react';
import styled from 'styled-components';
import Sun from './icons/Sun';
import Moon from './icons/Moon';

const title = 'Toggle light/dark theme';

interface IToggleThemeProps {
	theme: string;
	toggleTheme(): void;
}

interface IToggleContainer {
	lightTheme: boolean;
}

const Toggle: React.FC<IToggleThemeProps> = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light';

	return (
		<ToggleContainer
			id="toggleTheme"
			title={title}
			aria-label={title}
			lightTheme={isLight}
			onClick={toggleTheme}
		>
			<Sun />
			<Moon />
		</ToggleContainer>
	);
};

const ToggleContainer = styled.button<IToggleContainer>`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.background.default};
	width: 1.75rem;
	height: 1.75rem;
	border-radius: 30px;
	border: 2px solid ${({ theme }) => theme.divider};
	font-size: 0.25rem;
	overflow: hidden;
	cursor: pointer;

	svg {
		position: absolute;
		top: 2px;
		left: 2px;
		max-width: 1.25rem;
		height: auto;
		transition: all 195ms linear;

		&:first-child {
			transform: ${({ lightTheme }) =>
				lightTheme ? 'translateY(0)' : 'translateY(50px)'};
		}

		&:nth-child(2) {
			transform: ${({ lightTheme }) =>
				lightTheme ? 'translateY(-50px)' : 'translateY(0)'};
		}
	}
`;

export default Toggle;
