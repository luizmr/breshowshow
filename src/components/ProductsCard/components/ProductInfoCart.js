import React from 'react';

// utils
import ConvertToBrl from '../../../utils/convertToBrl';

const ProductInfoCart = ({ obj }) => {
	return (
		<div className="products__info">
			<p className="product__name">{obj.name}</p>
			<div className="product__data">
				<p className="data__values">
					{`${obj.quantity} un - `}
					{ConvertToBrl(obj.price * Number(obj.quantity))}
				</p>
				<p className="data__fees">
					{`Marca: ${obj.brand} - Tamanho: ${obj.size}`}
				</p>
			</div>
		</div>
	);
};

export default ProductInfoCart;
