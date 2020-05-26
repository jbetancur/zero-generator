import React from 'react';
import styled from 'styled-components';
import Sun from './icons/Sun';
import Moon from './icons/Moon';

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
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <Sun />
      <Moon />
    </ToggleContainer>
  );
};

const ToggleContainer = styled.button<IToggleContainer>`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.background.default};
  width: 3rem;
  height: 1.75rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.divider};
  font-size: 0.25rem;
  padding: 0.1rem;
  overflow: hidden;
  cursor: pointer;

  svg {
    max-width: 1.25rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;

export default Toggle;
