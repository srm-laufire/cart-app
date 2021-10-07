import { React } from 'react';
import './App.scss';
import context from './core/context';
import ItemInput from './components/itemInput';
import genInput from './components/genInput';
import AddButton from './components/addButton';

const App = () =>
	<div
		className="App"
		role="app"
	>
		Item { ItemInput(context) }
		Rate { genInput('rate')(context) }
		Quantity { genInput('quantity')(context)}
		{ AddButton(context) }
	</div>;

export default App;
