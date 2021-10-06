import { React } from 'react';

const Option = (item) =>
	<option key={ item } role="option" value={ item }>{ item }</option>;

const ItemInput = (context) => {
	const { config: { items }, actions, state: { itemInput }} = context;

	return (
		<select
			value={ itemInput }
			role="itemInput"
			onChange={ (evt) => actions.setItemInput(evt.target.value) }
		>
			{ items.map(Option)}
		</select>);
};

export default ItemInput;
