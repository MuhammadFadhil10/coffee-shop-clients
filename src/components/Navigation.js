import { Navbar, Image, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navigation = () => {
	const token = localStorage.getItem('access-token');
	const isAdmin = localStorage.getItem('is-admin');
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const mobileMenuHandler = () => {
		!showMobileMenu ? setShowMobileMenu(true) : setShowMobileMenu(false);
	};

	const logoutHandler = () => {
		localStorage.clear();
		setShowMobileMenu(false);
	};

	return (
		<>
			<Navbar
				className={`d-flex justify-content-around ${Classes.navbarContainer}`}
			>
				<Navbar.Brand href='/'>
					<Image src=''></Image>
					<Navbar.Text>Kopiku</Navbar.Text>
				</Navbar.Brand>
				{!token && (
					<div
						className={`d-flex justify-content-evenly ${Classes.registerContainer}`}
					>
						<Link to='/register'>Register</Link>
						<Link to='/login'>Login</Link>
					</div>
				)}
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
						<Form>
							<Form.Group
								className={!showMobileMenu ? `d-none` : `d-flex flex-column`}
							>
								<Form.Control type='text'></Form.Control>
								<Button>Search</Button>
							</Form.Group>
						</Form>
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					{isAdmin && (
						<li>
							<Link to='/'>Dashboard</Link>
						</li>
					)}
					{!isAdmin && (
						<>
							<li>
								<Link to='/'>Chart</Link>
							</li>
							<li>
								<Link to='/'>Order</Link>
							</li>
						</>
					)}
					{token && (
						<li onClick={() => logoutHandler()}>
							<Link to='/'>logout</Link>
						</li>
					)}
				</ul>
			</div>
		</>
	);
};

export default Navigation;
