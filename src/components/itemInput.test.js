import { render, fireEvent } from '@testing-library/react';
import { rndValue } from '@laufire/utils/random';
import config from '../core/config';
import ItemInput from './itemInput';

describe('itemInput', () => {
	const { items } = config;
	const item = rndValue(items);
	const context = {
		state: {
			item,
		},
		config: {
			items,
		},
		actions: {
			setItem: jest.fn(),
		},
	};

	test('renders the component as expected', () => {
		const { getByRole, getAllByRole } = render(ItemInput(context));
		const itemInput = getByRole('item');
		const options = getAllByRole('option');
		const values = options.map((data) => data.value);

		options.forEach((option) => {
			expect(option).toBeInTheDocument();
			expect(option).toHaveTextContent(option.value);
		});
		expect(values).toEqual(items);
		expect(itemInput).toBeInTheDocument();
		expect(itemInput.value).toEqual(item);
	});

	test('when clicked triggers the action, itemInput', () => {
		const value = item;

		const component = render(ItemInput(context)).getByRole('item');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setItem).toHaveBeenCalledWith(value);
	});
});
