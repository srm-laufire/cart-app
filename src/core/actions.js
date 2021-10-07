import CartManager from '../services/cartManager';

const actions = {
	setItem: ({ data }) => ({
		item: data,
	}),

	setRate: ({ data }) => ({
		rate: data,
	}),

	setQuantity: ({ data }) => ({
		quantity: data,
	}),

	addItem: (context) => ({
		items: CartManager.addItem(context),
	}),
};

export default actions;
