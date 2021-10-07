import { render } from '@testing-library/react';
import { React } from 'react';
import Item from './item';
import Items from './items';

describe('items', () => {
	const items = [];
	const context = {
		state: {
			items,
		},
	};

	test('renders the component as expected', () => {
		const component = render(Items(context)).getByRole('items');

		expect(component).toBeInTheDocument();
	});

	test('renders the items', () => {
		jest.spyOn(items, 'map').mockReturnValue(<div role="mock"/>);

		const component = render(Items(context)).getByRole('mock');

		expect(component).toBeInTheDocument();
		expect(items.map).toHaveBeenCalledWith(Item);
	});
});
