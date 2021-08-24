import React from 'react';

const ProductBottomComponent = ({ obj }) => {
	return (
		<div className="product__bottom">
			<div className="bottom__chip">
				<p>{obj.brand}</p>
			</div>
			<div className="bottom__chip">
				<p>{obj.type}</p>
			</div>
			<div className="bottom__chip">
				<p>{obj.size}</p>
			</div>
		</div>
	);
};

export default ProductBottomComponent;
