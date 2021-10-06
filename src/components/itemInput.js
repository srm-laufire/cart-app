import { React } from 'react';

const Option = (item) =>
	<option key={ item } role="option" value={ item }>{ item }</option>;

const ItemInput = (context) => {
	const { config: { items }, actions, state: { item }} = context;

	return (
		<select
			value={ item }
			role="item"
			onChange={ (evt) => actions.setItem(evt.target.value) }
		>
			{ items.map(Option)}
		</select>);
};

export default ItemInput;
