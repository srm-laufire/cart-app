import { React } from 'react';
import CartManager from '../services/cartManager';

const Item = (data) => {
	const { id, item, rate, quantity } = data;

	return (
		<div key={ id } role="items" className="item">
			<span role="item">{ item }</span>
			<span role="rate">{ rate }</span>
			<span role="quantity">{ quantity }</span>
			<span role="price">{ CartManager.getPrice(data) }</span>
		</div>
	);
};

export default Item;
