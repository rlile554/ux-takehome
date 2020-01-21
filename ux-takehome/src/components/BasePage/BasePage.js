import React from 'react';
import ListView from '../ListView/ListView';
import SingleView from '../SingleView/SingleView';
import GraphView from '../GraphView/GraphView';

const Basepage = (props) => {
    return (
        <React.Fragment>
            <ListView />
            <SingleView />
            <GraphView />
        </React.Fragment>
    )
};

export default Basepage;