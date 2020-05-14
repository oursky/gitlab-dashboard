import React from 'react';
import {Runner} from '../models/models';

interface Props {
    runners: Runner[];
}

function RunnerList(props: Props) {

    return (
        <div className="App">
            {props.runners.map((project, index) => <div key={index}>{JSON.stringify(project)}</div>)}
        </div>
    );
}

export default RunnerList;
