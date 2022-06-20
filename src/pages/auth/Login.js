import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Classes from './Auth.module.css';

const Login = () => {
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

					<Button>Login</Button>
				</Form>
				<Link to='/register'>Have no acount? Register here</Link>
			</Container>
		</>
	);
};

export default Login;
