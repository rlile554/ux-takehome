import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListView from '../ListView/ListView';
import SingleView from '../SingleView/SingleView';
import GraphView from '../GraphView/GraphView';
import Data from '../../static/data';
import Header from '../Header/Header';

const Basepage = () => {
	const getWidgetData = id => {
		const widget = Data.find(d => {
			return d.id === id;
		});
		return {
			...widget
		};
	};

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/list">
					<ListView
						widgetData={Data}
					/>
				</Route>
				<Route path="/graph">
					<GraphView widgetData={Data} />
				</Route>
				<Route
					path="/list/:id"
					render={({ match }) => (
						<SingleView {...getWidgetData(match.params.id)} />
					)}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default Basepage;
