import { React } from 'react';
import './App.scss';
import context from './core/context';
import ItemInput from './components/itemInput';

const App = () =>
	<div className="App" role="app">{ ItemInput(context) }</div>;

export default App;
