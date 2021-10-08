/* eslint-disable react/display-name */
jest.mock('./components/itemInput', () => () => <div role="item"/>);
jest.mock('./components/genInput',
	() => (value) => () => <div role={ value }/>);
jest.mock('./components/addButton', () => () => <div role="addButton"/>);
jest.mock('./components/items', () => () => <div role="items"/>);
jest.mock('./components/summary', () => () => <div role="summary"/>);

import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('renders the appropriate component', () => {
		const { getByRole } = render(<App/>);

		const components = [
			'item', 'rate', 'quantity', 'addButton', 'items', 'summary',
		];

		components.forEach((component) => {
			expect(getByRole(component)).toBeInTheDocument();
		});

		expect(getByRole('app')).toBeInTheDocument();
		expect(getByRole('app')).toHaveClass('App');
	});
});
