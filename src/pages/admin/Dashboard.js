import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem('access-token');
	const isAdmin = localStorage.getItem('is-admin');
	return (
		<>
			<Container fluid>
				<h1>Hello from dashboard</h1>
			</Container>
		</>
	);
};

export default Dashboard;
