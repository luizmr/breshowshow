import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import XMLParser from 'react-xml-parser';
import MaskedInput from 'react-text-mask';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { FaWhatsapp } from 'react-icons/fa';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ConvertToBrl from '../../utils/convertToBrl';
import ReducePrice from '../../utils/reducePrice';

function TextMaskCustom(props) {
	const { inputRef, ...other } = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
			placeholderChar={'\u2000'}
			showMask
		/>
	);
}

const DialogCep = ({ open, setOpen, cart, request = false }) => {
	const [cep, setCep] = useState(
		localStorage.getItem('cep') ? localStorage.getItem('cep') : '',
	);
	const [formatMessage, setFormatMessage] = useState(
		'Além disso, gostei dos produtos abaixo:',
	);
	const [formatMessageRequest, setFormatMessageRequest] = useState(
		'Olá, gostei dos produtos abaixo:%0A',
	);

	useEffect(() => {
		setCep(localStorage.getItem('cep') ? localStorage.getItem('cep') : '');
	}, [open]);

	const handleClose = () => {
		if (
			/^-?\d+$/.test(cep.split('-')[0]) === false ||
			/^-?\d+$/.test(cep.split('-')[1]) === false
		) {
			localStorage.removeItem('cep');
			// setSedexValue('');
			// setPacValue('');
		}
		setCep('');
		setOpen(false);
	};

	const handleSubmit = () => {
		localStorage.setItem('cep', cep);
		// setSedexValue('');
		// setPacValue('');
		setOpen(false);
	};

	// const searchCepValues = () => {
	// 	// 04510 pac
	// 	// 04014 sedex
	// 	setPacValue('⏳');
	// 	setSedexValue('⏳');
	// 	const mailArray = ['04510', '04014'];
	// 	mailArray.forEach((obj) => {
	// 		axios
	// 			.get(
	// 				`https://thingproxy.freeboard.io/fetch/http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=18950017&sCepDestino=${
	// 					cep.split('-')[0]
	// 				}${
	// 					cep.split('-')[1]
	// 				}&nVlPeso=1&nCdFormato=1&nVlComprimento=18&nVlAltura=9&nVlLargura=13&sCdMaoPropria=n&nVlValorDeclarado=21&sCdAvisoRecebimento=n&nCdServico=${obj}&nVlDiametro=0&StrRetorno=xml`,
	// 				{
	// 					headers: {
	// 						'Content-Type': 'application/xml',
	// 						// 'Access-Control-Allow-Origin': '*',
	// 					},
	// 				},
	// 			)
	// 			.then((response) => {
	// 				var xml = new XMLParser().parseFromString(response.data);
	// 				console.log(xml.children[0].children[1].value);
	// 				if (obj === '04510') {
	// 					setPacValue(
	// 						xml.children[0].children[1].value === '0,00'
	// 							? ''
	// 							: xml.children[0].children[1].value,
	// 					);
	// 				} else {
	// 					setSedexValue(
	// 						xml.children[0].children[1].value === '0,00'
	// 							? ''
	// 							: xml.children[0].children[1].value,
	// 					);
	// 				}
	// 			})
	// 			.catch((err) => {
	// 				if (obj === '04510') {
	// 					setPacValue('Erro!');
	// 				} else {
	// 					setSedexValue('Erro!');
	// 				}
	// 			});
	// 	});
	// };

	useEffect(() => {
		if (cart.length) {
			let newMessage = ['Além disso, gostei dos produtos abaixo: '];
			let newMessageRequest = ['Olá, gostei dos produtos abaixo:'];
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
				newMessageRequest.push(
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
			newMessage.push(
				`%0A*Valor total: ${ConvertToBrl(
					reducedValues,
				)} %2b FRETE* %0A%0A **FRETE: Ipaussu e Chavantes entrega grátis. Demais cidades à combinar.*`,
			);
			newMessageRequest.push(
				`%0A*Valor total: ${ConvertToBrl(
					reducedValues,
				)} %2b FRETE PARA ${cep}* %0A%0A **FRETE: Ipaussu e Chavantes entrega grátis. Demais cidades à combinar.*`,
			);
			setFormatMessageRequest(newMessageRequest.join(''));
			setFormatMessage(newMessage.join(''));
		}
	}, [cart]);

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="dialog-cep"
			aria-describedby="dialog-cep-textfield"
		>
			<DialogTitle id="dialog-cep">Informe o seu CEP</DialogTitle>
			<DialogContent>
				<DialogContentText id="dialog-cep-textfield">
					<div className="cep">
						<FormControl>
							<InputLabel htmlFor="formatted-text-mask-input">
								CEP
							</InputLabel>
							<Input
								value={cep}
								onChange={(e) => {
									setCep(e.target.value);
									if (
										/^-?\d+$/.test(
											e.target.value.split('-')[0],
										) === true ||
										/^-?\d+$/.test(
											e.target.value.split('-')[1],
										) === true
									) {
										localStorage.setItem(
											'cep',
											e.target.value,
										);

										// setSedexValue('');
										// setPacValue('');
									}
								}}
								name="textmask"
								variant="outlined"
								id="formatted-text-mask-input"
								autoFocus
								inputComponent={TextMaskCustom}
							/>
						</FormControl>

						{/* <Tooltip title="Calcular frete">
							<IconButton
								disabled={
									/^-?\d+$/.test(cep.split('-')[0]) &&
									/^-?\d+$/.test(cep.split('-')[1])
										? false
										: true
								}
								onClick={() => searchCepValues()}
							>
								<FaSearchDollar />
							</IconButton>
						</Tooltip> */}
					</div>
					<div className="correio">
						<div>
							<span>*Garantia do produto por hora do pedido</span>
						</div>
						{/* <div>
							<span>SEDEX: </span>
							<span>{sedexValue}</span>
						</div>
						<div>
							<span>PAC: </span>
							<span>{pacValue}</span>
						</div> */}
					</div>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={handleClose}
					className="button__clear button__common"
				>
					<p>Fechar</p>
				</Button>
				<Button
					onClick={handleSubmit}
					className={
						/^-?\d+$/.test(cep.split('-')[0]) &&
						/^-?\d+$/.test(cep.split('-')[1])
							? 'button__common button__whatsapp'
							: 'button__disabled button__common'
					}
					disabled={
						/^-?\d+$/.test(cep.split('-')[0]) &&
						/^-?\d+$/.test(cep.split('-')[1])
							? false
							: true
					}
				>
					<FaWhatsapp />
					<a
						href={`https://wa.me/+5514981333862/?text=${
							request
								? formatMessageRequest
								: `Olá, gostaria de saber mais informações sobre a entrega e frete para o meu CEP: *${cep}*%0A%0A${
										cart.length > 0 && formatMessage
								  }`
						}`}
						target="_blank"
						rel="noreferrer"
					>
						{request
							? 'Confirmar e enviar pedido'
							: 'Confirmar e enviar CEP'}
					</a>
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogCep;
