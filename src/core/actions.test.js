import actions from './actions';

test('itemInput', () => {
	const { itemInput } = actions;
	const data = Symbol('data');

	const result = itemInput({ data });

	expect(result).toEqual({ itemInput: data });
});
