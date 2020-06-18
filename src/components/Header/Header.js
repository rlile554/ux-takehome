import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const getTabIndex = (pathname) => {
	switch (pathname) {
	case '/list':
		return 0;
	case '/graph':
		return 1;
	default:
		return 0;
	}
};

const Header = (props) => {
	const tabIndex = getTabIndex(props.location.pathname);
	return (
		<AppBar position='static'>
			<Tabs value={tabIndex}>
				<Tab label='List' component={Link} to='/list' />
				<Tab label='Graph' component={Link} to='/graph' />
			</Tabs>
		</AppBar>
	);
};

Header.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(Header);
