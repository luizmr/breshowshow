import React, { useEffect, useState, memo } from 'react';

// utils
import { connect } from 'react-redux';
import ProductFullCardContent from './ProductFullCardContent';

const ProductFullCard = memo(({ obj, cart }) => {
	const [product, setProduct] = useState({
		quantity: '',
	});

	useEffect(() => {
		if (cart.length) {
			const productFound = cart.find((el) => el.id === obj.id);
			if (productFound) {
				setProduct(productFound);
			}
		}
	}, []);

	useEffect(() => {
		if (cart.length === 0) {
			setProduct({ ...product, quantity: 0 });
		}
	}, [cart]);

	return (
		<div className="product__card">
			<div className="card__header">
				<div className="header__info">
					<div className="header__chip">
						{obj.condition ? 'Novo' : 'Usado'}
					</div>
					<p>{obj.name}</p>
				</div>
			</div>
			<ProductFullCardContent
				obj={obj}
				product={product}
				setProduct={setProduct}
			/>
		</div>
	);
});

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps)(ProductFullCard);
