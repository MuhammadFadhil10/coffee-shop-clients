import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
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
				<h1>Hello from dashboard</h1>
				<ul>
					<li>
						<Link to='/admin/add-product'>Add Product</Link>
					</li>
				</ul>
			</Container>
		</>
	);
};

export default Dashboard;
