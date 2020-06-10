import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
	display: flex;
	align-items: center;
	height: 58px;
	padding-left: 16px;
	padding-right: 16px;
	justify-content: space-between;
	background: ${({ theme }) => theme.palette.primary.main};
	color: ${({ theme }) => theme.palette.primary.contrastText};
`;

interface IHeaderProps {
	children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => (
	<HeaderStyle>{children}</HeaderStyle>
);

export default Header;
