import { React } from 'react';

const AddButton = (context) =>
	<button
		role="addButton"
		onClick={ () => context.actions.addItem(context) }
	>
		Add
	</button>;

export default AddButton;
