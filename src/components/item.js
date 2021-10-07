import { React } from 'react';

const Item = ({ id, item, rate, quantity }) =>
	<div key={ id } role="items">
		<span role="item" className="item">{ item }</span>
		<span role="rate" className="rate">{ rate }</span>
		<span role="quantity" className="quantity">{ quantity }</span>
	</div>;

export default Item;
