import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';

document.addEventListener("DOMContentLoaded", () => {
	//wait until DOM loaded. Then get root element from html.

	// Render
	const root = document.getElementById("root");
	ReactDOM.render(<Congrats/>, root);
});
