// eslint-disable-next-line react/display-name
jest.mock('./components/itemInput', () => () => <div role="itemInput"/>);

import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('renders the appropriate component', () => {
		const { getByRole } = render(<App/>);

		const components = ['itemInput'];

		components.forEach((component) => {
			expect(getByRole(component)).toBeInTheDocument();
		});

		expect(getByRole('app')).toBeInTheDocument();
		expect(getByRole('app')).toHaveClass('App');
	});
});
