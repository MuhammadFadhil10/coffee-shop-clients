import { Navbar, Image, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const mobileMenuHandler = () => {
		!showMobileMenu ? setShowMobileMenu(true) : setShowMobileMenu(false);
	};
	return (
		<>
			<Navbar
				className={`d-flex justify-content-center ${Classes.navbarContainer}`}
			>
				<Navbar.Brand>
					<Image src=''></Image>
					<Navbar.Text>Kopiku</Navbar.Text>
				</Navbar.Brand>
				{/* <Form>
					<Form.Group className={`d-flex`}>
						<Form.Control type='text'></Form.Control>
						<Button>Search</Button>
					</Form.Group>
				</Form> */}
				<div
					className={`d-flex flex-column justify-content-between 
                    ${Classes.mobileMenu}`}
					onClick={() => {
						mobileMenuHandler();
					}}
				>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</Navbar>
			<div
				className={
					!showMobileMenu
						? ` d-none `
						: `d-flex  flex-column align-items-center ${Classes.mobileMenuContent} `
				}
			>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Form>
							<Form.Group
								className={!showMobileMenu ? `d-none` : `d-flex flex-column`}
							>
								<Form.Control type='text'></Form.Control>
								<Button>Search</Button>
							</Form.Group>
						</Form>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navigation;
