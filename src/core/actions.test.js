import CartManager from '../services/cartManager';
import actions from './actions';

describe('actions', () => {
	const { addItem } = actions;
	const actionNames = [
		['setItem', 'item'],
		['setRate', 'rate'],
		['setQuantity', 'quantity'],
	];

	test.each(actionNames)('%p', (actionName, impactedKey) => {
		const data = Symbol('data');

		const result = actions[actionName]({ data });

		expect(result).toEqual({ [impactedKey]: data });
	});

	test('addItem', () => {
		const context = Symbol('context');
		const returned = Symbol('returned');

		jest.spyOn(CartManager, 'addItem').mockReturnValue(returned);

		const result = addItem(context);

		expect(result).toEqual({ items: returned });
		expect(CartManager.addItem).toHaveBeenCalledWith(context);
	});
});
