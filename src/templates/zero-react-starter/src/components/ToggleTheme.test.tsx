import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../test-utils/utils';
import ToggleTheme from './ToggleTheme';

test('should render correctly to default light theme', () => {
	const { container } = renderWithTheme(<ToggleTheme onClick={jest.fn()} />)('light');

	expect(container.firstChild).toMatchSnapshot();
});

test('should be checked when dark is true', () => {
	const { container } = renderWithTheme(<ToggleTheme checked onClick={jest.fn()} />)('light');

	expect(container.firstChild).toMatchSnapshot();
});

test('should toggle the dark theme when clicked', () => {
	const toggleMock = jest.fn();
	const { container, getByTitle } = renderWithTheme(<ToggleTheme onClick={toggleMock} />)('light');

	fireEvent.click(getByTitle('Toggle light/dark theme'));

	expect(toggleMock).toBeCalledTimes(1);
	expect(container.firstChild).toMatchSnapshot();
});

test('should render correctly when focused', () => {
	const { container, getByTitle } = renderWithTheme(<ToggleTheme onClick={jest.fn()} />)('light');

	fireEvent.focus(getByTitle('Toggle light/dark theme'));

	expect(container.firstChild).toMatchSnapshot();
});

test('should render correctly when blurred', () => {
	const { container, getByTitle } = renderWithTheme(<ToggleTheme onClick={jest.fn()} />)('light');

	fireEvent.focus(getByTitle('Toggle light/dark theme'));
	fireEvent.blur(getByTitle('Toggle light/dark theme'));

	expect(container.firstChild).toMatchSnapshot();
});
