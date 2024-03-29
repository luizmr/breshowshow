import React, { memo } from 'react';

// material-ui/icons
// import { FiShoppingCart } from 'react-icons/fi';
// import { IconButton } from '@material-ui/core';

// utils
import { Link } from 'react-router-dom';
import ProductSimpleCardContent from './ProductSimpleCardContent';

const ProductSimpleCard = memo(({ obj }) => {
	return (
		<Link to={`/product/${obj.id}`}>
			<div className="product__card simple-card">
				<div className="card__header">
					<div className="header__info">
						<div className="header__chip">
							{obj.condition ? 'Novo' : 'Usado'}
						</div>
						<p>{obj.name}</p>
					</div>
					{/* <div className="header__icons">
					<IconButton>
						<Link to={`/product/${obj.id}`}>
							<FiShoppingCart />
						</Link>
					</IconButton>
				</div> */}
				</div>
				<ProductSimpleCardContent obj={obj} />
			</div>
		</Link>
	);
});

export default ProductSimpleCard;
