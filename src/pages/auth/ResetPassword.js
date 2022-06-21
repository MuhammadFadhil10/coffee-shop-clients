import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';

import Classes from './Auth.module.css';
import usePost from '../../hooks/usePost';
import AlertMessage from '../../components/AlertMessage';

const ResetPassword = () => {
	const [emailValue, setEmailValue] = useState('');
	const [resetPasswordTrigger, setResetPasswordTrigger] = useState(false);
	const [resetPasswordResult, setResetPasswordResult] = useState('');

	const getResetPassword = usePost(
		'/account/reset-password',
		{
			email: emailValue,
		},
		resetPasswordTrigger
	);

	const resetPasswordHandler = () => {
		!resetPasswordTrigger
			? setResetPasswordTrigger(true)
			: setResetPasswordTrigger(false);
	};
	useEffect(() => {
		getResetPassword.then((result) => {
			setResetPasswordResult(result);
		});
	}, [getResetPassword]);

	return (
		<>
			<Container
				fluid
				className={`d-flex justify-content-center ${Classes.loginContainer}`}
			>
				<Form className={` ${Classes.loginForm}`}>
					{resetPasswordResult && resetPasswordResult.data && (
						<AlertMessage
							type={
								resetPasswordResult.data &&
								resetPasswordResult.data.status === 'error'
									? 'danger'
									: 'success'
							}
							message={
								resetPasswordResult.data && resetPasswordResult.data.message
							}
						></AlertMessage>
					)}
					<Form.Label>email</Form.Label>
					<Form.Control
						type='email'
						autoComplete='none'
						value={emailValue}
						onChange={(e) => {
							setEmailValue((prev) => (prev = e.target.value));
						}}
					></Form.Control>
					<Button
						variant='danger'
						onClick={() => {
							resetPasswordHandler();
						}}
					>
						Reset password
					</Button>
				</Form>
			</Container>
		</>
	);
};

export default ResetPassword;
