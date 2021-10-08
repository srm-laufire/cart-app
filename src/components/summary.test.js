import { render } from '@testing-library/react';
import CartManager from '../services/cartManager';
import Summary from './summary';

test('renders the component as expected', () => {
	const context = Symbol('context');
	const total = Symbol('total');

	jest.spyOn(CartManager, 'getTotal').mockReturnValue(total);

	const component = render(Summary(context)).getByRole('summary');

	expect(CartManager.getTotal).toHaveBeenCalledWith(context);
	expect(component).toBeInTheDocument();
	expect(component).toHaveTextContent('Total');
});
