import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartButtons from '../../components/CartButtons/CartButtons';

// components
import ProductFullCard from '../../components/ProductFullCard/ProductFullCard';

// utils
import { connect } from 'react-redux';
import { removeAllFromCart } from '../../store/ShoppingCart/cart-actions';
import { CircularProgress } from '@material-ui/core';
import { db } from '../../config';

const ProductInfo = ({ cart, removeAllFromCart }) => {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const productPathname = window.location.pathname;
	const productId = productPathname.substring(
		productPathname.lastIndexOf('/') + 1,
	);

	useEffect(() => {
		// axios
		// 	.get(
		// 		`https://61212a58f5849d0017fb4193.mockapi.io/api/v1/clothes/${productId}`,
		// 	)
		// 	.then((response) => {
		// setProduct(response.data);
		// setLoading(false);
		// 	})
		// 	.catch((err) => setLoading(false));
		// Create a reference to the cities collection

		db.collection('breshow-clothes')
			.where('id', '==', `${productId}`)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, ' => ', doc.data());
					setProduct(doc.data());
					setLoading(false);
				});
			})
			.catch((error) => {
				setLoading(false);
			});
	}, []);

	return (
		<div className="products">
			<div className="products__page">
				<CartButtons
					handleDeleteItems={removeAllFromCart}
					cart={cart}
					toPayment={false}
				/>
				<div className="products__pageContent">
					{loading ? (
						<div className="products__loading">
							<CircularProgress />
						</div>
					) : (
						<>
							{product ? (
								<ProductFullCard
									obj={product}
									key={productId}
								/>
							) : (
								<div className="products__cards">
									<div className="not-found">
										<p>
											Desculpa, mas o produto procurado
											não pôde ser encontrado ou
											encontra-se indisponível em nosso
											estoque.{' '}
										</p>
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps, { removeAllFromCart })(ProductInfo);
