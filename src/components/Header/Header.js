import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
	return (
		<AppBar position="static">
			<Tabs value={props.location} >
				<Tab label="List" component={Link} to='/list' />
				<Tab label="Graph" component={Link} to="/graph" />
			</Tabs>
		</AppBar>
	);
};

Header.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(Header);