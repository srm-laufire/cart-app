import CartManager from './cartManager';
import * as helpers from '../test/helpers';
import { keys, range } from '@laufire/utils/collection';
import { rndBetween, rndValue } from '@laufire/utils/random';

describe('cartManager', () => {
	const { getItem, addItem, isEmpty, getPrice, getTotal } = CartManager;

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

	describe('isEmpty', () => {
		const { getRndString } = helpers;
		const allFull = {
			rate: getRndString(),
			quantity: getRndString(),
		};
		const keyToEmpty = rndValue(keys(allFull));
		const oneEmpty = {
			...allFull,
			[keyToEmpty]: '',
		};
		const expectations = [
			[allFull, false],
			[oneEmpty, true],
		];

		test.each(expectations)('', (state, expected) => {
			const result = isEmpty({ state });

			expect(result).toEqual(expected);
		});
	});

	test('getPrice', () => {
		const { getRndNumber } = helpers;
		const rate = getRndNumber();
		const quantity = getRndNumber();
		const expected = rate * quantity;

		const result = getPrice({ rate, quantity });

		expect(result).toEqual(expected);
	});

	test('getTotal', () => {
		const maxLength = 5;
		const itemsLength = rndBetween(1, maxLength);
		const items = range(1, itemsLength);
		const context = {
			state: {
				items,
			},
		};

		jest.spyOn(CartManager, 'getPrice').mockReturnValue(1);

		const result = getTotal(context);

		items.forEach((item) => {
			expect(CartManager.getPrice).toHaveBeenCalledWith(item);
		});
		expect(result).toEqual(itemsLength);
	});
});
