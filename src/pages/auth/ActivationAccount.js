import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useGet from '../../hooks/useGet';

const ActivationAccount = () => {
	const { activationToken } = useParams();
	const checkToken = useGet(`/activation/${activationToken}`);
	return (
		<>
			<Container fluid className={`d-flex flex-column align-items-center`}>
				{checkToken && <h1>{checkToken.data.message}</h1>}
				<Link to='/login'>
					{checkToken && checkToken.data.status === 'success'
						? 'Login now'
						: 'get new activation link'}
				</Link>
			</Container>
		</>
	);
};

export default ActivationAccount;
