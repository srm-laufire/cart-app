import actions from './actions';

test('setItemInput', () => {
	const { setItemInput } = actions;
	const data = Symbol('data');

	const result = setItemInput({ data });

	expect(result).toEqual({ itemInput: data });
});
