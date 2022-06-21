import { useEffect, useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Classes from './Auth.module.css';
import usePost from '../../hooks/usePost';

import AlertMessage from '../../components/AlertMessage';

const Login = () => {
	const mount = useRef(false);
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [newTokenEmail, setNewTokenEmail] = useState('');
	const [showNewTokenEmail, setShowNewTokenEmail] = useState(false);

	const [loginTrigger, setLoginTrigger] = useState(false);
	const [loginResult, setLoginResult] = useState(false);
	const [newTokenTrigger, setNewTokenTrigger] = useState(false);
	const [newTokenResult, setNewTokenResult] = useState('');

	const sendLogin = () => {
		!loginTrigger ? setLoginTrigger(true) : setLoginTrigger(false);
	};

	const loginProcess = usePost(
		'/login',
		{
			email: emailValue,
			password: passwordValue,
		},
		loginTrigger
	);

	useEffect(() => {
		if (mount.current) {
			loginProcess.then((result) => {
				setLoginResult(result);
			});
		} else {
			mount.current = true;
		}
	}, [loginProcess]);

	// fetch new activation link
	const getNewActivationLink = () => {
		!newTokenTrigger ? setNewTokenTrigger(true) : setNewTokenTrigger(false);
	};

	const getNewToken = usePost(
		`/activation/new-token/${newTokenEmail}`,
		{},
		newTokenTrigger
	);
	useEffect(() => {
		if (mount.current) {
			getNewToken.then((result) => setNewTokenResult(result));
		} else {
			mount.current = true;
		}
	}, [getNewToken]);

	return (
		<>
			<Container
				fluid
				className={`d-flex flex-column align-items-center ${Classes.loginContainer} `}
			>
				<h1>Login</h1>
				<Form
					className={`d-flex flex-column align-items-center ${Classes.loginForm} `}
				>
					{loginResult && (
						<AlertMessage
							type={
								loginResult.data && loginResult.data.status === 'error'
									? 'danger'
									: 'success'
							}
							message={
								loginResult.data && loginResult.data.status === 'error'
									? loginResult.data.message.map((msg) => msg)
									: loginResult.data.message
							}
						/>
					)}
					{newTokenResult && (
						<AlertMessage
							type={
								newTokenResult.data && newTokenResult.data.status === 'error'
									? 'danger'
									: 'success'
							}
							message={newTokenResult && newTokenResult.data.message}
						/>
					)}
					<Form.Group>
						<Form.Label>email</Form.Label>
						<Form.Control
							autoComplete='off'
							type='email'
							name='email'
							value={emailValue}
							onChange={(e) => setEmailValue((prev) => (prev = e.target.value))}
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							value={passwordValue}
							onChange={(e) =>
								setPasswordValue((prev) => (prev = e.target.value))
							}
						></Form.Control>
					</Form.Group>
					<div className={`d-flex`}>
						<Button onClick={() => sendLogin()}>Login</Button>
						<Button
							variant='outline-primary'
							onClick={() =>
								!showNewTokenEmail
									? setShowNewTokenEmail(true)
									: setShowNewTokenEmail(false)
							}
						>
							{!showNewTokenEmail ? 'get new activation Link' : 'cancel'}
						</Button>
					</div>
					<Form.Group className={showNewTokenEmail ? '' : 'd-none'}>
						<Form.Label>email</Form.Label>
						<Form.Control
							autoComplete='off'
							type='email'
							name='email'
							value={newTokenEmail}
							onChange={(e) =>
								setNewTokenEmail((prev) => (prev = e.target.value))
							}
						></Form.Control>
						<Button onClick={() => getNewActivationLink()}>
							Send new link
						</Button>
					</Form.Group>
				</Form>
				<Link to='/register'>Have no acount? Register here</Link>
				<Link to='/account/reset-password'>Forgot password</Link>
			</Container>
		</>
	);
};

export default Login;
