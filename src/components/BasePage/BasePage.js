import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ListView from '../ListView/ListView';
import SingleView from '../SingleView/SingleView';
import GraphView from '../GraphView/GraphView';
import Data from '../../static/data';

class Basepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'list',
            selectedWidgetId: '',
            showSingleModal: false
        };
        this.onTabSelect = this.onTabSelect.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
    }

    onTabSelect(e, tab) {
        this.setState({
            selectedTab: tab,
            selectedWidgetId: null
        });
    }

    handleItemSelect(id) {
        this.setState({
            selectedWidgetId: id,
            selectedTab: 'singleView'
        });
    }

    getWidgetData() {
        const widget = Data.find(d => {
            return d.id === this.state.selectedWidgetId;
        });
        return {
            ...widget
        };
    }

    render() {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Tabs
                        value={this.state.selectedTab}
                        onChange={this.onTabSelect}
                    >
                        <Tab label="List" value="list" />
                        <Tab label="Graph" value="graph" />
                        <Tab label={this.state.selectedWidgetId} value="singleView" />
                    </Tabs>
                </AppBar>
                {this.state.selectedTab === 'list' && (
                    <ListView
                        widgetData={Data}
                        onItemSelect={this.handleItemSelect}
                    />
                )}
                {this.state.selectedTab === 'singleView' && (
                    <SingleView {...this.getWidgetData()} />
                )}
                {this.state.selectedTab === 'graph' && (
                    <GraphView widgetData={Data} />
                )}
            </React.Fragment>
        );
    }
}

export default Basepage;
