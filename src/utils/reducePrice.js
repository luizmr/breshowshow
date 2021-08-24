const ReducePrice = (cart) => {
	const priceArray = [];

	cart.forEach((obj) => {
		if (obj.price) {
			const price = obj.price * obj.quantity;
			priceArray.push(price);
		}
	});
	const priceReduced = priceArray.reduce((acc, curr) => acc + curr, 0);

	return priceReduced;
};

export default ReducePrice;
