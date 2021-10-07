import CartManager from './cartManager';
import * as helpers from '../test/helpers';

describe('cartManager', () => {
	const { getItem, addItem } = CartManager;

	test('getItem', () => {
		const id = Symbol('id');
		const data = {
			item: Symbol('item'),
			rate: Symbol('rate'),
			quantity: Symbol('quantity'),
		};
		const context = {
			state: data,
		};

		const expected = {
			...data,
			id,
		};

		jest.spyOn(helpers, 'getRndString').mockReturnValue(id);

		const result = getItem(context);

		expect(result).toEqual(expected);
	});

	test('addItem', () => {
		const items = [Symbol('items')];
		const item = Symbol('item');
		const context = {
			state: {
				items,
				item,
			},
		};
		const expected = [
			...items,
			item,
		];

		jest.spyOn(CartManager, 'getItem').mockReturnValue(item);

		const result = addItem(context);

		expect(result).toEqual(expected);
		expect(CartManager.getItem).toHaveBeenCalledWith(context);
	});
});
