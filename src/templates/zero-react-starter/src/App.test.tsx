import 'jest-styled-components';
import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from './App';

const history = createMemoryHistory();

test('should render correctly with the default theme', () => {
	const { container } = render(
		<Router history={history}>
			<App />
		</Router>,
	);

	expect(container.firstChild).toMatchSnapshot();
});

test('should toggle the dark theme when clicked', () => {
	const { container, getByTitle } = render(
		<Router history={history}>
			<App />
		</Router>,
	);

	fireEvent.click(getByTitle('Toggle light/dark theme'));

	expect(container.firstChild).toMatchSnapshot();
});

test('should toggle the light theme when clicked from dark theme', () => {
	const { container, getByTitle } = render(
		<Router history={history}>
			<App />
		</Router>,
	);

	// join the darkside
	fireEvent.click(getByTitle('Toggle light/dark theme'));
	// redemption!
	fireEvent.click(getByTitle('Toggle light/dark theme'));

	expect(container.firstChild).toMatchSnapshot();
});

test('should render the about page when the about link is clicked', () => {
	const { container, getByText } = render(
		<Router history={history}>
			<App />
		</Router>,
	);

	fireEvent.click(getByText('About'));

	expect(container.firstChild).toMatchSnapshot();
});

test('should render the 404 page if a route does not exist', () => {
	history.push('/oops');

	const { getByRole } = render(
		<Router history={history}>
			<App />
		</Router>,
	);

	expect(getByRole('heading').textContent).toBe('Page Not Found');
});

test('should render correctly with the default theme of the media does not match', () => {
	window.matchMedia = jest.fn().mockImplementation(query => {
		return {
			matches: false,
			media: query,
		};
	});

	const { container } = render(
		<Router history={history}>
			<App />
		</Router>,
	);

	expect(container.firstChild).toMatchSnapshot();
});

test('should render correctly with the default theme of the media matches', () => {
	window.matchMedia = jest.fn().mockImplementation(query => {
		return {
			matches: true,
			media: query,
		};
	});

	const { container } = render(
		<Router history={history}>
			<App />
		</Router>,
	);

	expect(container.firstChild).toMatchSnapshot();
});
