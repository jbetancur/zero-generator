import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
	font-size: 24px;
	font-weight: 700;
	width: 100%;
`;

const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;

	a {
		color: ${({ theme }) => theme.palette.primary.contrastText};
		text-decoration: none;
	}

	> * {
		margin: 10px;
	}
`;

const HeaderStyle = styled.header`
	display: flex;
	align-items: center;
	height: 58px;
	padding-left: 16px;
	padding-right: 16px;
	background: ${({ theme }) => theme.palette.primary.main};
	color: ${({ theme }) => theme.palette.primary.contrastText};
`;

interface IHeaderProps {
	title?: string;
	children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ title, children }) => (
	<HeaderStyle>
		<Title>{title}</Title>
		<Actions>{children}</Actions>
	</HeaderStyle>
);

export default Header;
