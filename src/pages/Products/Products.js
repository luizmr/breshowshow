import React, { useEffect, useState } from 'react';
import axios from 'axios';

// material-ui/icons
import CircularProgress from '@material-ui/core/CircularProgress';

// components
import ProductFilter from './components/ProductFilter';

import ProductsList from './components/ProductsList';
import { db } from '../../config';

const Products = () => {
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [products, setProducts] = useState([]);
	const [allProducts, setAllProducts] = useState([]);
	const [pagination, setPagination] = useState(0);
	const [page, setPage] = useState(1);
	const [order, setOrder] = useState('1');
	const [pageSize, setPageSize] = useState('10');
	const [searchString, setSearchString] = useState('');
	const [loading, setLoading] = useState(true);

	const handlePageSize = (value, data) => {
		const productLength = data.length;
		const numberOfPages = productLength / Number(value);
		setPagination(Math.ceil(numberOfPages));
	};

	useEffect(() => {
		// axios
		// 	.get('https://61212a58f5849d0017fb4193.mockapi.io/api/v1/clothes')
		// 	.then((response) => {
		// 		setAllProducts(response.data);
		// 		handleSearch(pageSize, order, response.data);
		// 	});

		let todoRef = db.collection('breshow-clothes');
		todoRef.get().then(function (querySnapshot) {
			let newItems = [];
			querySnapshot.forEach(function (doc) {
				newItems.push({ ...doc.data() });
			});
			console.log(newItems, 'newItems');
			setAllProducts(newItems);
			handleSearch(pageSize, order, newItems);
		});
	}, []);

	const handleChangePage = (event, value) => {
		setPage(value);
		const lastTernaryOption =
			value === 10 ? pageSize : pageSize * (value - 1);
		setFilteredProducts(
			products.slice(
				value === 1 ? 0 : lastTernaryOption,
				pageSize * value,
			),
		);
	};

	const filterByOrder = (value, data) => {
		if (value === '1') {
			return data.sort((a, b) => a.name.localeCompare(b.name));
		}
		return data.sort((a, b) => b.name.localeCompare(a.name));
	};

	const handleSearch = (pageSize, order, data, filter) => {
		setLoading(true);
		const productFilteredByString = data
			? filter
				? allProducts
				: data.filter((obj) => {
						return (
							obj.description
								.toLowerCase()
								.indexOf(searchString.toLowerCase()) !== -1
						);
				  })
			: products.filter((obj) => {
					return (
						obj.description
							.toLowerCase()
							.indexOf(searchString.toLowerCase()) !== -1
					);
			  });

		const productFilteredByOrder = filterByOrder(
			order,
			productFilteredByString,
		);
		setProducts(productFilteredByOrder);
		const productFilteredByPageSize = productFilteredByOrder.slice(
			0,
			Number(pageSize),
		);
		setTimeout(() => {
			setFilteredProducts(productFilteredByPageSize);
			handlePageSize(pageSize, productFilteredByOrder);
			setPage(1);
			setLoading(false);
		}, 1500);
	};

	const handleChangeOrder = (e) => {
		const {
			target: { value },
		} = e;
		setOrder(value);
		handleSearch(pageSize, value);
	};

	const handleChangePageSize = (e) => {
		const {
			target: { value },
		} = e;
		setPageSize(value);
		handleSearch(value, order);
	};

	const handleSearchString = (value) => {
		setSearchString(value);
		if (value === '') {
			// axios
			// 	.get(
			// 		'https://61212a58f5849d0017fb4193.mockapi.io/api/v1/clothes',
			// 	)
			// 	.then((response) => {
			// 		setProducts(response.data);
			// 		handleSearch(pageSize, order, response.data, true);
			// 	});

			let todoRef = db.collection('breshow-clothes');
			todoRef.get().then(function (querySnapshot) {
				let newItems = [];
				querySnapshot.forEach(function (doc) {
					newItems.push({ ...doc.data() });
				});
				console.log(newItems, 'newItems');
				setAllProducts(newItems);
				handleSearch(pageSize, order, newItems, true);
			});
		}
	};

	const ProductsContent = () => {
		return (
			<>
				{loading ? (
					<div className="products__loading">
						<CircularProgress />
					</div>
				) : (
					<ProductsList
						filteredProducts={filteredProducts}
						page={page}
						pagination={pagination}
						handleChangePage={handleChangePage}
					/>
				)}
			</>
		);
	};

	return (
		<div className="products">
			<div className="products__page">
				<div className="products__pageFilter">
					<ProductFilter
						handleChangeOrder={handleChangeOrder}
						order={order}
						handleChangePageSize={handleChangePageSize}
						pageSize={pageSize}
						handleSearchString={handleSearchString}
						searchString={searchString}
						handleSearch={() => handleSearch(pageSize, order)}
					/>
				</div>
				<ProductsContent />
			</div>
		</div>
	);
};

export default Products;
