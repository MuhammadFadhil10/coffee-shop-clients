import axios from 'axios';
import { useEffect, useState } from 'react';

const useGet = (endpoint, token) => {
	const [data, setData] = useState(null);
	const getData = async () => {
		const response = await axios.get(`http://localhost:5000${endpoint}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	};
	useEffect(() => {
		const response = getData();

		response.then((result) => {
			setData(result);
		});
	}, []);
	return data;
};

export default useGet;
