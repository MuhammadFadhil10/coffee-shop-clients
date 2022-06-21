import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlertMessage = ({ type, message }) => {
	return (
		<>
			<Alert variant={type}>{message}</Alert>
		</>
	);
};

export default AlertMessage;
