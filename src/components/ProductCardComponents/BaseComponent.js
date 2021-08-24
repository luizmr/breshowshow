import React from 'react';

//utils
import ConvertToBrl from '../../utils/convertToBrl';

const BaseComponent = ({ price }) => {
	return (
		<div className="detail__base">
			<p className="detail__title">Preço</p>
			<div className="base__content">
				<span>{ConvertToBrl(price)}</span>
			</div>
		</div>
	);
};

export default BaseComponent;
