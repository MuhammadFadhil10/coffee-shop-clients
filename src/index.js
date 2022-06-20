import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Navigation from './components/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Navigation />
		<Routes>
			<Route path='/' element={<App />}></Route>
		</Routes>
	</BrowserRouter>
);
