import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import NotFound from './pages/NotFound/NotFound';
import { Footer } from './components/Footer/Footer';

const CustomRoute = ({ key, Component, path }) => (
	<Route exact key={key} path={path} component={Component} />
);
const routeOptions = [
	{
		key: 'products',
		Component: Products,
		path: '/',
	},
	{
		key: 'cart',
		Component: Cart,
		path: '/cart',
	},
	{
		key: 'product-info',
		Component: ProductInfo,
		path: '/product/:cod',
	},
];

export const Routes = () => {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<div className={'app'}>
				<div className="routes">
					<Switch>
						{routeOptions.map((route) => CustomRoute({ ...route }))}
						<Route path="*" component={NotFound} />
					</Switch>
					<Footer />
				</div>
			</div>
		</Router>
	);
};
