import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AddProduct = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem('access-token');
	const isAdmin = localStorage.getItem('is-admin');
	useEffect(() => {
		if (!token || isAdmin === 'false') {
			navigate('/page-not-found');
		}
	}, []);
	return (
		<>
			<Container fluid>
				<h1>Hello from AddProduct</h1>
			</Container>
		</>
	);
};

export default AddProduct;
