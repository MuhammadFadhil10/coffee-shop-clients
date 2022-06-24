import axios from 'axios';

import { useState, useEffect, useRef } from 'react';

const usePost = async (endpoint, body, trigger, token) => {
	const mount = useRef(false);
	const [data, setData] = useState(null);
	const formData = new FormData();
	body.image && formData.append('image', body.image);
	body.productName && formData.append('productName', body.productName);
	body.productPrice && formData.append('productPrice', body.productPrice);
	body.productDesc && formData.append('productDesc', body.productDesc);

	useEffect(() => {
		if (mount.current) {
			const postData = async () => {
				try {
					const response = await axios.post(
						`http://localhost:5000${endpoint}`,
						formData,
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
