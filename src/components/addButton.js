import { React } from 'react';
import CartManager from '../services/cartManager';

const AddButton = (context) =>
	<button
		role="addButton"
		disabled={ CartManager.isEmpty(context) }
		onClick={ () => context.actions.addItem(context) }
	>
		Add
	</button>;

export default AddButton;
