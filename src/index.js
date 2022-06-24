import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ActivationAccount from './pages/auth/ActivationAccount';

import Navigation from './components/Navigation';
import ResetPassword from './pages/auth/ResetPassword';
import UpdatePassword from './pages/auth/UpdatePassword';
import Dashboard from './pages/admin/Dashboard';
import PageNotFound from './pages/404';
import AddProduct from './pages/admin/AddProduct';

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
			<Route path='/account/reset-password' element={<ResetPassword />}></Route>
			<Route
				path='/account/update-password/:userId'
				element={<UpdatePassword />}
			></Route>
			<Route path='/admin/dashboard' element={<Dashboard />}></Route>
			<Route path='/admin/add-product' element={<AddProduct />}></Route>
			<Route path='*' element={<PageNotFound />}></Route>
		</Routes>
	</BrowserRouter>
);
