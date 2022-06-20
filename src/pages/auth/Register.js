import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Classes from './Auth.module.css';

const Register = () => {
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
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							autoComplete='off'
							type='text'
							name='name'
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>email</Form.Label>
						<Form.Control
							autoComplete='off'
							type='email'
							name='email'
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' name='password'></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm password</Form.Label>
						<Form.Control type='password' name='confirmPassword'></Form.Control>
					</Form.Group>
					<Button>Register</Button>
				</Form>
				<Link to='/login'>Have an acount? Login here</Link>
			</Container>
		</>
	);
};

export default Register;
