import actions from './actions';

describe('actions', () => {
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
});
