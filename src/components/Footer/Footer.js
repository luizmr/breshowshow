import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__message">
				<p>Sobre a entrega dos pedidos</p>
				<FiArrowRight />
				<p>
					Ipaussu e Chavantes: Frete grátis. Demais cidades: Entrega e
					fretes a combinar.
				</p>
			</div>
		</div>
	);
};
