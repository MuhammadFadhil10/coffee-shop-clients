import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Classes from './Auth.module.css';
import usePost from '../../hooks/usePost';
import AlertMessage from '../../components/AlertMessage';

const UpdatePassword = () => {
	const { userId } = useParams();
	const [newPasswordValue, setNewPasswordValue] = useState('');
	const [UpdatePasswordTrigger, setUpdatePasswordTrigger] = useState(false);
	const [updatePasswordResult, setUpdatePasswordResult] = useState(null);

	const updatePassword = usePost(
		'/account/update-password',
		{
			newPassword: newPasswordValue,
			userId: userId,
		},
		UpdatePasswordTrigger
	);
	const updatePasswordHandler = () => {
		!UpdatePasswordTrigger
			? setUpdatePasswordTrigger(true)
			: setUpdatePasswordTrigger(false);
	};

	useEffect(() => {
		updatePassword.then((result) => {
			setUpdatePasswordResult(result);
		});
	}, [updatePassword]);

	return (
		<>
			<Container
				fluid
				className={`d-flex justify-content-center ${Classes.loginContainer}`}
			>
				<Form className={` ${Classes.loginForm}`}>
					{updatePasswordResult && updatePasswordResult.data && (
						<AlertMessage
							type={
								updatePasswordResult.data.status === 'error'
									? 'danger'
									: 'success'
							}
							message={
								updatePasswordResult.data.status === 'error'
									? updatePasswordResult.data.message.map((err) => err)
									: updatePasswordResult.data.message
							}
						></AlertMessage>
					)}
					<Form.Label>new Password</Form.Label>
					<Form.Control
						type='password'
						name='newPassword'
						value={newPasswordValue}
						onChange={(e) => {
							setNewPasswordValue((prev) => (prev = e.target.value));
						}}
					></Form.Control>
					<Button onClick={() => updatePasswordHandler()}>
						Update password
					</Button>
				</Form>
			</Container>
		</>
	);
};

export default UpdatePassword;
