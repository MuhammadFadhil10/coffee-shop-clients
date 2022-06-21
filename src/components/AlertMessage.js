import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert } from 'react-bootstrap';

const AlertMessage = ({ type, message }) => {
	const [showAlert, setShowAlert] = useState(true);

	return (
		<>
			<Alert className={showAlert ? '' : 'd-none'} variant={type}>
				{message}
			</Alert>
		</>
	);
};

export default AlertMessage;
