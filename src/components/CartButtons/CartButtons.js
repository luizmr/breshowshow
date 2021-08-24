import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material-ui/icons
import { Button } from '@material-ui/core';
import { FiTrash, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ConvertToBrl from '../../utils/convertToBrl';
import ReducePrice from '../../utils/reducePrice';

const CartButtons = ({ handleDeleteItems, cart, toPayment }) => {
	const history = useHistory();
	const [formatMessage, setFormatMessage] = useState(
		'Olá, gostei dos produtos abaixo:%0A',
	);

	useEffect(() => {
		if (cart.length) {
			let newMessage = ['Olá, gostei dos produtos abaixo:'];
			cart.forEach((obj, index) => {
				newMessage.push(
					`%0A*${index + 1}) ${obj.name.toUpperCase()} (cód: ${
						obj.id
					})*%0A      Quantidade: ${obj.quantity}%0A      Tamanho: ${
						obj.size
					}%0A      Total: *${ConvertToBrl(
						obj.quantity * obj.price,
					)}*%0A`,
				);
			});
			const reducedValues = ReducePrice(cart);
			newMessage.push(`%0A*Valor total: ${ConvertToBrl(reducedValues)}*`);
			setFormatMessage(newMessage.join(''));
		}
	}, [cart]);

	return (
		<div className="cart__header">
			<Button
				className="button__back button__common"
				onClick={() => {
					history.push('/');
				}}
			>
				<FiArrowLeft />
				<p>Voltar</p>
			</Button>
			{!!cart.length && (
				<div className="buttons__right">
					<Button
						className={
							toPayment
								? 'button__whatsapp button__common'
								: 'button__payment button__common'
						}
						onClick={() => {
							!toPayment && history.push('/cart');
						}}
					>
						{toPayment && <FaWhatsapp />}
						{toPayment ? (
							<a
								href={`https://wa.me/+5514981333862/?text=${formatMessage}`}
								target="_blank"
								rel="noreferrer"
							>
								Enviar pedido
							</a>
						) : (
							<p>Ir para o Carrinho</p>
						)}
						<FiArrowRight />
					</Button>

					<Button
						onClick={handleDeleteItems}
						className="button__clear button__common"
					>
						<p>Limpar carrinho</p>
						<FiTrash />
					</Button>
				</div>
			)}
		</div>
	);
};

export default CartButtons;

//http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=18950017&sCepDestino=18970009&nVlPeso=1&nCdFormato=1&nVlComprimento=15&nVlAltura=15&nVlLargura=15&sCdMaoPropria=n&nVlValorDeclarado=21&sCdAvisoRecebimento=n&nCdServico=40010&nVlDiametro=0&StrRetorno=xml
