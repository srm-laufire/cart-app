import { getRndString } from '../test/helpers';

const CartManager = {
	getItem: ({ state: { item, rate, quantity }}) => ({
		id: getRndString(),
		item: item,
		quantity: quantity,
		rate: rate,
	}),

	addItem: (context) =>
		[
			...context.state.items,
			CartManager.getItem(context),
		],
};

export default CartManager;
