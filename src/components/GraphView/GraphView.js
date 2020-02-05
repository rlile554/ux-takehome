import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

const getYearFromDate = datestamp => {
    return parseInt(datestamp.substring(0, 4));
};

const convertWidgetDataToYearRevenuePairs = widgetDataList => {
    return widgetDataList.map(data => {
        return {
            year: getYearFromDate(data.timestamp),
            revenue: data.revenue
        };
    });
};

const sortListByAscendingYears = yearRevenueList => {
    return yearRevenueList.sort((a, b) => {
        return a.year - b.year;
    });
};

const getYearlyTotalsList = sortedList => {
    const returnList = [];
    let currentYear;
    let runningTotal = 0;
    for (let i = 0; i < sortedList.length; i++) {
        if (!currentYear) {
            currentYear = sortedList[i].year;
            runningTotal = sortedList[i].revenue;
        } else if (i === sortedList.length - 1) {
            if (sortedList[i].year === currentYear) {
                runningTotal = runningTotal + sortedList[i].revenue;
                returnList.push({
                    name: currentYear,
                    revenue: runningTotal
                });
            } else {
                returnList.push({
                    name: sortedList[i].year,
                    revenue: sortedList[i].revenue
                });
            }
        } else if (sortedList[i].year !== currentYear) {
            returnList.push({
                name: currentYear,
                revenue: runningTotal
            });
            currentYear = sortedList[i].year;
            runningTotal = sortedList[i].revenue;
        } else {
            runningTotal = runningTotal + sortedList[i].revenue;
        }
    }
    return returnList;
};

const mapPropsToGraphData = widgetDataList => {
    const convertedPairs = convertWidgetDataToYearRevenuePairs(widgetDataList);
    const sortedList = sortListByAscendingYears(convertedPairs);
    return getYearlyTotalsList(sortedList);
};

const GraphView = props => {
    const classes = useStyles();
    const data = mapPropsToGraphData(props.widgetData);
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h3">
                        Total Revenue By Year
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <BarChart
                        data={data}
                        width={600}
                        height={300}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="#8884d8" />
                    </BarChart>
                </Grid>
            </Grid>
        </div>
    );
};

GraphView.propTypes = {
    //List of widget data objects
    widgetData: PropTypes.array,
}

export default GraphView;
