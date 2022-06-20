import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import noProductImg from '../assets/images/no-product.png';
import Classes from './NotFound.module.css';

const NotFound = ({ message }) => {
	return (
		<>
			<Container
				fluid
				className={`d-flex flex-column align-items-center ${Classes.notFoundContainer}`}
			>
				<h1>OOooOPs!!</h1>
				<Image src={noProductImg}></Image>
				<h3>{message}</h3>
			</Container>
		</>
	);
};

export default NotFound;
