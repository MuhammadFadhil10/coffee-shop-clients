import { Container, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Classes from './AddProduct.module.css';
import useAddProduct from '../../hooks/useAddProduct';

const AddProduct = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem('access-token');
	const isAdmin = localStorage.getItem('is-admin');

	const [addProductTrigger, setAddProductTrigger] = useState(false);
	const [productThumbnail, setProductThumbnail] = useState('');
	const [image, setImage] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [priceValue, setPriceValue] = useState('');
	const [descValue, setDescValue] = useState('');

	useEffect(() => {
		if (!token || isAdmin === 'false') {
			navigate('/page-not-found');
		}
	}, []);

	// add product admin/add-product
	const addProductHandler = () => {
		!addProductTrigger
			? setAddProductTrigger(true)
			: setAddProductTrigger(false);
	};

	const addProduct = useAddProduct(
		'/admin/add-product',
		{
			image: image,
			productName: nameValue,
			productPrice: priceValue,
			productDesc: descValue,
		},
		addProductTrigger,
		token
	);

	return (
		<>
			<Container fluid>
				<h1>Hello from AddProduct</h1>
				<Form>
					<Image
						src={productThumbnail}
						className={`${Classes.productThumbnail}`}
					></Image>
					<Form.Group>
						<Form.Label>Product name</Form.Label>
						<Form.Control
							type='text'
							name='productName'
							autoComplete='off'
							value={nameValue}
							onChange={(e) => {
								setNameValue((prev) => (prev = e.target.value));
							}}
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Product image</Form.Label>
						<Form.Control
							type='file'
							name='image'
							onChange={(e) => {
								setImage(e.target.files[0]);
								setProductThumbnail(URL.createObjectURL(e.target.files[0]));
							}}
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control
							type='number'
							name='productPrice'
							autoComplete='off'
							value={priceValue}
							onChange={(e) => {
								setPriceValue((prev) => (prev = e.target.value));
							}}
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							type='text'
							name='productDesc'
							autoComplete='off'
							value={descValue}
							onChange={(e) => {
								setDescValue((prev) => (prev = e.target.value));
							}}
						></Form.Control>
					</Form.Group>
					<Button onClick={() => addProductHandler()}>Add product</Button>
				</Form>
			</Container>
		</>
	);
};

export default AddProduct;
