import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	CardActionArea
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	flexDiv: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconSpace: {
		paddingRight: theme.spacing(2)
	}
}));

const ListItem = props => {
	const { title, description, revenue, timestamp, id } = props;
	const classes = useStyles();
	const history = useHistory();
	return (
		<Card >
			<CardActionArea
				onClick={() => {
					history.push(`/list/${id}`);
				}}
			>
				<CardHeader title={title} subheader={description} />
				<CardContent>
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
			</CardActionArea>
		</Card>
	);
};

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	revenue: PropTypes.number.isRequired,
	timestamp: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
};

export default ListItem;
