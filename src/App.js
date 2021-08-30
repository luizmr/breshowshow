import React from 'react';
import { Routes } from './routes';

// utils
import { connect } from 'react-redux';
import { setUser } from './store/Authentication/auth-actions';

const App = ({ user, setUser }) => {
	// useEffect(() => {
	// 	if (!user) {
	// 		localStorage.setItem('client', JSON.stringify(Client.client));
	// 		setUser(Client.client);
	// 	}
	// }, [user]);
	return (
		<>
			<Routes />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
	};
};

export default connect(mapStateToProps, { setUser })(App);
