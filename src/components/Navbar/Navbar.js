import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material-ui/icons
import { Badge, Avatar, IconButton, Button } from '@material-ui/core';
import { FiShoppingCart } from 'react-icons/fi';

// assets
import Logo from '../../assets/images/logo.png';

import ConvertToBrl from '../../utils/convertToBrl';

// utils
import { connect } from 'react-redux';
import ReducePrice from '../../utils/reducePrice';

const Navbar = ({ user, cart }) => {
	const [finalPrice, setFinalPrice] = useState(0);
	const history = useHistory();
	useEffect(() => {
		if (cart.length) {
			setFinalPrice(ReducePrice(cart));
		} else {
			setFinalPrice(0);
		}
	}, [cart]);
	return (
		<div className="navbar">
			<img
				src={Logo}
				alt="Logo"
				onClick={() => history.push('/')}
				aria-hidden="true"
			/>
			<div className="navbar__info">
				<div className="navbar__infoCart">
					<h1>Breshow</h1>
					<Button
						className="infoCart__cart"
						onClick={() => history.push('/cart')}
					>
						<p>{ConvertToBrl(finalPrice)}</p>
					</Button>
				</div>
				<div className="navbar__infoUser">
					<IconButton aria-label="notification">
						<Badge badgeContent={cart.length} color="secondary">
							<FiShoppingCart />
						</Badge>
					</IconButton>
					<Avatar>{'U'}</Avatar>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps)(Navbar);
