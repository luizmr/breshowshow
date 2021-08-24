import React from 'react';
import ModalImage from 'react-modal-image';

// components
import BaseComponent from '../ProductCardComponents/BaseComponent';
import ProductBottomComponent from '../ProductCardComponents/ProductBottomComponent';
import StorageComponent from '../ProductCardComponents/StorageComponent';

const ProductSimpleCardContent = ({ obj }) => {
	return (
		<div className="card__content">
			<div className="content__img">
				<ModalImage
					small={obj.photos[0]}
					large={obj.photos[0]}
					alt={obj.name}
				/>
			</div>
			<div className="content__info">
				<div className="product__main">
					<div className="product__details">
						<BaseComponent price={obj.price} />
						<StorageComponent quantityAvailable={obj.quantity} />
					</div>
				</div>
				<ProductBottomComponent obj={obj} />
			</div>
		</div>
	);
};

export default ProductSimpleCardContent;
