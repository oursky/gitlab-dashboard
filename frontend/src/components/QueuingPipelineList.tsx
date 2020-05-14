import React from 'react';
import {Project, Pipeline} from '../models/models';

interface Props {
    projects: Project[];
    pipelines: Pipeline[];
}

function QueuingPipelineList(props: Props) {

    return (
        <div className="App">
            {props.projects.map((project, index) => <div key={index}>{JSON.stringify(project).slice(0, 100)}</div>)}
            {props.pipelines.map((pipeline, index) => <div key={index}>{JSON.stringify(pipeline).slice(0, 100)}</div>)}
        </div>
    );
}

export default QueuingPipelineList;
