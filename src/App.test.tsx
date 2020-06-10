import 'jest-styled-components';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('should render correctly with the default theme', () => {
	const { container } = render(<App />);

	expect(container.firstChild).toMatchSnapshot();
});

test('should toggle the dark theme when clicked', () => {
	const { container, getByTitle } = render(<App />);

	fireEvent.click(getByTitle('Toggle light/dark theme'));

	expect(container.firstChild).toMatchSnapshot();
});

test('should toggle the light theme when clicked from dark theme', () => {
	const { container, getByTitle } = render(<App />);

	// join the darkside
	fireEvent.click(getByTitle('Toggle light/dark theme'));
	// redemption!
	fireEvent.click(getByTitle('Toggle light/dark theme'));

	expect(container.firstChild).toMatchSnapshot();
});

test('should render correctly with the default theme of the media does not match', () => {
	window.matchMedia = jest.fn().mockImplementation(query => {
		return {
			matches: false,
			media: query,
		};
	});

	const { container } = render(<App />);

	expect(container.firstChild).toMatchSnapshot();
});

test('should render correctly with the default theme of the media matches', () => {
	window.matchMedia = jest.fn().mockImplementation(query => {
		return {
			matches: true,
			media: query,
		};
	});

	const { container } = render(<App />);

	expect(container.firstChild).toMatchSnapshot();
});
