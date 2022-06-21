import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ActivationAccount from './pages/auth/ActivationAccount';

import Navigation from './components/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Navigation />
		<Routes>
			<Route path='/' element={<App />}></Route>
			<Route path='/login' element={<Login />}></Route>
			<Route path='/register' element={<Register />}></Route>
			<Route
				path='/account/activation/:activationToken'
				element={<ActivationAccount />}
			></Route>
		</Routes>
	</BrowserRouter>
);
