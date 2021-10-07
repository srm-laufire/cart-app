import { render, fireEvent } from '@testing-library/react';
import AddButton from './addButton';

describe('addButton', () => {
	const context = {
		actions: {
			addItem: jest.fn(),
		},
	};

	test('renders the component as expected', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('Add');
	});

	test('when clicked, triggers the action addItem', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addItem).toHaveBeenCalledWith(context);
	});
});
