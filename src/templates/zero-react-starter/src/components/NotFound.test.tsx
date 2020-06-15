import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

test('should render correctly', () => {
	const { container } = render(<NotFound />);

	expect(container.firstChild).toMatchSnapshot();
});
