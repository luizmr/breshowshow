import React from 'react';
import Slider from 'react-slick';

// components
import BaseComponent from '../ProductCardComponents/BaseComponent';
import ProductBottomComponent from '../ProductCardComponents/ProductBottomComponent';
import StorageComponent from '../ProductCardComponents/StorageComponent';

const ProductSimpleCardContent = ({ obj }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="card__content">
			<div className="content__img">
				<Slider {...settings}>
					{obj.photos.map((el) => (
						<div key={el}>
							<img src={el} alt={el} />
						</div>
					))}
				</Slider>
			</div>
			<div className="content__info">
				<div className="product__main">
					<div className="product__details">
						<BaseComponent price={obj.price} />
						<StorageComponent quantityAvailable={obj.quantity} />
					</div>
				</div>
				<ProductBottomComponent obj={obj} />
			</div>
		</div>
	);
};

export default ProductSimpleCardContent;
