import { render, fireEvent } from '@testing-library/react';
import CartManager from '../services/cartManager';
import AddButton from './addButton';

describe('addButton', () => {
	const context = {
		actions: {
			addItem: jest.fn(),
		},
	};

	test('renders the component as expected', () => {
		jest.spyOn(CartManager, 'isEmpty').mockReturnValue(true);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('Add');
	});

	const expectations = [
		['disabled', true],
		['enabled', false],
	];

	test.each(expectations)('addButton is %p when the isEmpty returns %p',
		(dummy, returnValue) => {
			jest.spyOn(CartManager, 'isEmpty').mockReturnValue(returnValue);

			const component = render(AddButton(context)).getByRole('addButton');

			expect(component.disabled).toEqual(returnValue);
			expect(CartManager.isEmpty).toHaveBeenCalledWith(context);
		});

	test('when clicked, triggers the action addItem', () => {
		jest.spyOn(CartManager, 'isEmpty').mockReturnValue(false);

		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addItem).toHaveBeenCalledWith(context);
	});
});
