import React, { useEffect, useState } from 'react';
import ConvertToBrl from '../../utils/convertToBrl';

// components
import InfoDiv from '../InfoDiv/InfoDiv';
import { FaWhatsapp } from 'react-icons/fa';

// utils
import { connect } from 'react-redux';
import ReducePrice from '../../utils/reducePrice';
import { IconButton } from '@material-ui/core';
import DialogCep from '../DialogCep/DialogCep';

const TotalCard = ({ cart }) => {
	const [finalPrice, setFinalPrice] = useState(0);
	const [open, setOpen] = useState(false);
	const [sedexValue, setSedexValue] = useState('');
	const [pacValue, setPacValue] = useState('');
	useEffect(() => {
		if (cart.length) {
			const reducedValues = ReducePrice(cart);
			setFinalPrice(reducedValues);
		} else {
			setFinalPrice(0);
		}
	}, [cart]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	return (
		<>
			<div className="summary__products">
				<div className="products__header">
					<div className="header__info">
						<p>Valor</p>
					</div>
				</div>
				<div className="products__total">
					<div className="fees">
						<InfoDiv
							title="Total"
							subtitle="(sem frete)"
							info={ConvertToBrl(finalPrice)}
							spanClass="info__string"
						/>
						<InfoDiv
							title="Frete"
							info={
								<IconButton>
									<FaWhatsapp
										fontSize="24px"
										onClick={handleClickOpen}
									/>
								</IconButton>
							}
							spanClass="info__whatsapp"
						/>
					</div>
					<InfoDiv
						title="Total:"
						info={`${
							pacValue.includes(',')
								? ConvertToBrl(
										finalPrice +
											Number(pacValue.replace(',', '.')),
								  )
								: sedexValue.includes(',')
								? ConvertToBrl(
										finalPrice +
											Number(
												sedexValue.replace(',', '.'),
											),
								  )
								: `${ConvertToBrl(finalPrice)} + Frete`
						}`}
						spanClass="info__string"
					/>
				</div>
			</div>
			<DialogCep
				open={open}
				setOpen={setOpen}
				pacValue={pacValue}
				sedexValue={sedexValue}
				setSedexValue={setSedexValue}
				setPacValue={setPacValue}
				cart={cart}
			/>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps)(TotalCard);
