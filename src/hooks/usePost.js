import axios from 'axios';

import { useState, useEffect, useRef } from 'react';

const usePost = async (endpoint, body, trigger, token) => {
	const mount = useRef(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		if (mount.current) {
			const postData = async () => {
				try {
					const response = await axios.post(
						`http://localhost:5000${endpoint}`,
						body,
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					);
					setData(response);
				} catch (error) {
					setData(error.response);
				}
			};
			postData();
		} else {
			mount.current = true;
		}
	}, [trigger]);
	return data;
};

export default usePost;
