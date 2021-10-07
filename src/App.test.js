/* eslint-disable react/display-name */
jest.mock('./components/itemInput', () => () => <div role="item"/>);
jest.mock('./components/genInput',
	() => (value) => () => <div role={ value }/>);
jest.mock('./components/addButton', () => () => <div role="addButton"/>);

import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('renders the appropriate component', () => {
		const { getByRole } = render(<App/>);

		const components = ['item', 'rate', 'quantity', 'addButton'];

		components.forEach((component) => {
			expect(getByRole(component)).toBeInTheDocument();
		});

		expect(getByRole('app')).toBeInTheDocument();
		expect(getByRole('app')).toHaveClass('App');
	});
});
