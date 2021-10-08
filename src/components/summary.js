import { React } from 'react';
import CartManager from '../services/cartManager';

const Summary = (context) =>
	<div role="summary">Total { CartManager.getTotal(context) }</div>;

export default Summary;
