import React, { useState } from 'react';
import Slider from 'react-slick';
import { Lightbox } from 'react-modal-image';

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
	const [image, setImage] = useState('');
	return (
		<div className="card__content">
			<div className="content__img">
				<Slider {...settings}>
					{obj.photos.map((el) => (
						<div onClick={() => setImage(el)}>
							<img src={el} alt={el} />
						</div>
					))}
				</Slider>
				{image.length > 0 && (
					<Lightbox
						small={image}
						large={image}
						onClose={() => setImage('')}
						alt={obj.name}
					/>
				)}
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
