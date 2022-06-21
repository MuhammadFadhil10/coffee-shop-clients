import axios from 'axios';

import { useState, useEffect, useRef } from 'react';

const usePost = async (endpoint, body, trigger) => {
	const mount = useRef(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		if (mount.current) {
			const postData = async () => {
				const response = await axios.post(
					`http://localhost:5000${endpoint}`,
					body
				);
				setData(response);
			};
			postData();
		} else {
			mount.current = true;
		}
	}, [trigger]);
	return data;
};

export default usePost;
