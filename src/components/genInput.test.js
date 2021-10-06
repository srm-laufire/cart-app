import { render, fireEvent } from '@testing-library/react';
import getRndNumber from '../test/helpers';
import genInput from './genInput';

describe('genInput', () => {
	const value = getRndNumber();

	const expectations = [
		['rate', 'setRate'],
		['quantity', 'setQuantity'],
	];

	test.each(expectations)('renders the %p component as expected',
		(type) => {
			const context = {
				state: {
					[type]: value,
				},
			};

			const Input = genInput(type);
			const component = render(Input(context)).getByRole(type);

			expect(component).toBeInTheDocument();
			expect(component.type).toEqual('number');
			expect(component.value).toEqual(String(value));
		});

	test.each(expectations)('%p component triggers the action, %p',
		(type, actionName) => {
			const stateValue = value - 1;
			const context = {
				state: {
					[type]: stateValue,
				},
				actions: {
					[actionName]: jest.fn(),
				},
			};

			const Result = genInput(type);
			const component = render(Result(context)).getByRole(type);

			fireEvent.change(component, { target: { value }});

			expect(context.actions[actionName])
				.toHaveBeenCalledWith(Number(value));
		});
});
