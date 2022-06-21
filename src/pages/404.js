import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PageNotFound = () => {
	return (
		<>
			<Container fluid className={`d-flex flex-column align-items-center`}>
				<h1>404</h1>
				<h3>Page not found</h3>
				<p>look like you search the wrong page</p>
			</Container>
		</>
	);
};

export default PageNotFound;
