import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '75%',
		padding: theme.spacing(2)
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
		'&:hover': {
			background: '#4791db',
			cursor: 'select'
		}
	},
	flexDiv: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconSpace: {
		paddingRight: theme.spacing(2)
	}
}));

const getWidgetInfoComponents = data => {
	return data.map((widget, idx) => {
		return (
			<Grid item xs={12} sm={6} md={3} key={idx}>
				<ListItem
					title={widget.name}
					description={widget.description}
					revenue={widget.revenue}
					timestamp={widget.timestamp}
					id={widget.id}
				/>
			</Grid>
		);
	});
};

const ListView = ({ widgetData }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{widgetData ? (
					getWidgetInfoComponents(widgetData)
				) : (
					<Grid item xs={6}>
						<Paper className={classes.paper}>No Widget Data</Paper>
					</Grid>
				)}
			</Grid>
		</div>
	);
};

ListView.propTypes = {
	widgetData: PropTypes.array.isRequired
};

export default ListView;
