import { React } from 'react';
import Item from './item';

const Items = ({ state: { items }}) =>
	<div role="items">
		<span>{ items.map(Item)}</span>
	</div>;

export default Items;
