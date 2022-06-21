import { useEffect, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Classes from './Auth.module.css';
import usePost from '../../hooks/usePost';

// import component
import AlertMessage from '../../components/AlertMessage';

const Register = () => {
	const mount = useRef(false);
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

	const [registerTrigger, setRegisterTrigger] = useState(false);
	const [registerResult, setRegisterResult] = useState(null);

	const registerProcess = usePost(
		'/register',
		{
			name: nameValue,
			email: emailValue,
			password: passwordValue,
			confirmPassword: confirmPasswordValue,
		},
		registerTrigger
	);

	const sendRegister = () => {
		!registerTrigger ? setRegisterTrigger(true) : setRegisterTrigger(false);
	};
	// get register result from fullfilled register promise
	useEffect(() => {
		if (mount.current) {
			registerProcess.then((result) => {
				setRegisterResult(result);
			});
		} else {
			mount.current = true;
		}
	}, [registerProcess]);

	return (
		<>
			<Container
				fluid
				className={`d-flex flex-column align-items-center  ${Classes.registerContainer}`}
			>
				<h1>Create account</h1>
				<Form
					className={`d-flex flex-column align-items-center  ${Classes.registerForm}`}
				>
					{registerResult && (
						<AlertMessage
							type={
								registerResult.data && registerResult.data.status === 'error'
									? 'danger'
									: 'success'
							}
							message={
								registerResult.data && registerResult.data.status === 'error'
									? registerResult.data.message.map((msg) => msg)
									: registerResult.data.message
							}
						/>
					)}
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							autoComplete='off'
							type='text'
							name='name'
							value={nameValue}
							onChange={(e) => setNameValue((prev) => (prev = e.target.value))}
						></Form.Control>
					</Form.Group>
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
					<Form.Group>
						<Form.Label>Confirm password</Form.Label>
						<Form.Control
							type='password'
							name='confirmPassword'
							value={confirmPasswordValue}
							onChange={(e) =>
								setConfirmPasswordValue((prev) => (prev = e.target.value))
							}
						></Form.Control>
					</Form.Group>
					<Button onClick={() => sendRegister()}>Register</Button>
				</Form>
				<Link to='/login'>Have an acount? Login here</Link>
			</Container>
		</>
	);
};

export default Register;
