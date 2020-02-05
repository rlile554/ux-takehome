import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '300px',
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
	},
	button: {
		marginTop: theme.spacing(2)
	}
}));

const SingleView = props => {
	const classes = useStyles();
	const { name, description, category, revenue, timestamp, id } = props;
	const history = useHistory();
	return (
		<div className={classes.root}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2">
						{`${name}(${id})`}
					</Typography>

					<Typography
						gutterBottom
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{category}
					</Typography>

					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{description}
					</Typography>

					<div className={classes.flexDiv}>
						<MonetizationOnIcon
							className={classes.iconSpace}
							fontSize="small"
						/>
						<Typography component="p" display="inline">
							{revenue}
						</Typography>
					</div>

					<div className={classes.flexDiv}>
						<ScheduleIcon
							className={classes.iconSpace}
							fontSize="small"
						/>
						<Typography component="p" display="inline">
							{timestamp}
						</Typography>
					</div>

				</CardContent>
			</Card>
            
			<Button variant="contained" onClick={() => history.goBack()} className={classes.button}>
				<KeyboardBackspaceIcon />
			</Button>
		</div>
	);
};

SingleView.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	revenue: PropTypes.number.isRequired,
	timestamp: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
};

export default SingleView;
