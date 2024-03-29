import React from 'react';
import { FaWarehouse } from 'react-icons/fa';

const StorageComponent = ({ quantityAvailable }) => {
	return (
		<div className="detail__storage">
			<p className="detail__title">Estoque</p>
			{quantityAvailable >= 1 ? (
				<div className="storage__full">
					<FaWarehouse />
					<span>{`${quantityAvailable} un`}</span>
				</div>
			) : (
				<div className="storage__empty">
					<div>
						<span>Sem estoque</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default StorageComponent;
