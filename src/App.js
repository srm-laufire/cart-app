import { React } from 'react';
import './App.scss';
import context from './core/context';
import ItemInput from './components/itemInput';
import genInput from './components/genInput';
import AddButton from './components/addButton';
import Items from './components/items';
import Summary from './components/summary';

const App = () =>
	<div
		className="App"
		role="app"
	>
		Item { ItemInput(context) }
		Rate { genInput('rate')(context) }
		Quantity { genInput('quantity')(context)}
		{ AddButton(context) }
		<span>{ Summary(context) }</span>
		<span>{ Items(context) }</span>
	</div>;

export default App;
