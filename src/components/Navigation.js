import { Navbar, Image, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from './Navigation.module.css';

const Navigation = () => {
	return (
		<>
			<Navbar>
				<Navbar.Brand>
					<Image src=''></Image>
					<Navbar.Text>Kopiku</Navbar.Text>
				</Navbar.Brand>
				<Form>
					<Form.Group className={`d-flex`}>
						<Form.Control type='text'></Form.Control>
						<Button>Search</Button>
					</Form.Group>
				</Form>
				<div className={`${Classes.mobileMenu}`}></div>
			</Navbar>
		</>
	);
};

export default Navigation;
