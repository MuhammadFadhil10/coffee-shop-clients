import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Classes from './App.module.css';
import useGet from './hooks/useGet';
import NotFound from './pages/NotFound';

function App() {
	const data = useGet('/products');
	console.log(data);
	return (
		<Container fluid>
			<h1>Hello from fadhil</h1>
			{data &&
				data.data.result &&
				data.data.result.map((el) => {
					return (
						<div>
							<h1>{el.name}</h1>
							<h1>{el.price}</h1>
						</div>
					);
				})}
			{data && !data.data.result && (
				<div>
					<NotFound message={data.data.message} />
				</div>
			)}
		</Container>
	);
}

export default App;
