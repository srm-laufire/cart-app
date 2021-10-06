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
};

export default actions;
