import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 80px;
	font-size: 92px;
	opacity: 0.4;
`;

const NotFound404: React.FC = () => (
	<Container role="heading" aria-label="heading">
		Page Not Found
	</Container>
);

export default NotFound404;
