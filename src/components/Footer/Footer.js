import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__message">
				<span>Sobre a entrega dos pedidos</span>
				<FiArrowRight />
				<span>
					Ipaussu e Chavantes: Frete grátis. Demais cidades: Entrega e
					fretes a combinar.
				</span>
			</div>
		</div>
	);
};
