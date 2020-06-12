import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../test-utils/utils';
import ToggleTheme from './ToggleTheme';

test('should render correctly to default light theme', () => {
	const { container } = renderWithTheme(
		<ToggleTheme theme="light" toggleTheme={jest.fn()} />,
	)('light');

	expect(container.firstChild).toMatchSnapshot();
});

test('should toggle the dark theme when clicked', () => {
	const toggleMock = jest.fn();
	const { container, getByTitle } = renderWithTheme(
		<ToggleTheme theme="light" toggleTheme={toggleMock} />,
	)('light');

	fireEvent.click(getByTitle('Toggle light/dark theme'));

	expect(toggleMock).toBeCalledTimes(1);
	expect(container.firstChild).toMatchSnapshot();
});
