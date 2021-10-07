import { render } from '@testing-library/react';
import { getRndString } from '../test/helpers';
import { map } from '@laufire/utils/collection';
import Item from './item';
import CartManager from '../services/cartManager';

describe('item', () => {
	const state = {
		id: getRndString(),
		item: getRndString(),
		rate: getRndString(),
		quantity: getRndString(),
	};
	const price = getRndString();

	beforeEach(() => {
		jest.spyOn(CartManager, 'getPrice').mockReturnValue(price);
	});

	test('renders the component as expected', () => {
		const component = render(Item(state)).getByRole('items');

		expect(component).toBeInTheDocument();
	});

	test('renders the children with appropriate class', () => {
		const { getByRole } = render(Item(state));
		const { item, rate, quantity } = state;

		map({ item, rate, quantity }, (value, key) => {
			const children = getByRole(key);

			expect(children).toHaveClass(key);
			expect(children).toHaveTextContent(value);
		});
	});

	test('renders the item price as expected', () => {
		const { getByRole } = render(Item(state));

		expect(getByRole('price')).toHaveClass('price');
		expect(getByRole('price')).toHaveTextContent(price);
		expect(CartManager.getPrice).toHaveBeenCalledWith(state);
	});
});
