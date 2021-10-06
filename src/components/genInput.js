import { React } from 'react';

const actionNames = {
	rate: 'setRate',
	quantity: 'setQuantity',
};

// eslint-disable-next-line react/display-name
const genInput = (name) => ({ actions, state }) =>
	<input
		type="Number"
		role={ name }
		value={ state[name] }
		onChange={ (evt) =>
			actions[actionNames[name]](Number(evt.target.value)) }
	/>;

export default genInput;
