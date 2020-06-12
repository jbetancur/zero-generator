import React from 'react';
import { renderWithTheme } from '../../test-utils/utils';
import Header from './Header';

test('should render correctly to default light theme', () => {
	const { container } = renderWithTheme(<Header>Noooooo!!!!!</Header>)('light');

	expect(container.firstChild).toMatchSnapshot();
});
