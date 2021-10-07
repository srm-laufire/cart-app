import { React } from 'react';
import CartManager from '../services/cartManager';

const Item = (data) => {
	const { id, item, rate, quantity } = data;

	return (
		<div key={ id } role="items">
			<span role="item" className="item">{ item }</span>
			<span role="rate" className="rate">{ rate }</span>
			<span role="quantity" className="quantity">{ quantity }</span>
			<span role="price" className="price">
				{ CartManager.getPrice(data) }
			</span>
		</div>
	);
};

export default Item;
