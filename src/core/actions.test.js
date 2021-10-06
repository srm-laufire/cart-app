import actions from './actions';

test('itemInput', () => {
	const { setItem } = actions;
	const data = Symbol('data');

	const result = setItem({ data });

	expect(result).toEqual({ item: data });
});
