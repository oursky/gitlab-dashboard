import React from 'react';
import {ProjectViewModel} from '../models/models';

interface Props {
    projectsView: ProjectViewModel[];
}

function CompletedPipelineList(props: Props) {

    return (
        <div>
            {props.projectsView.map((project, index) => {
                return (
                    <div key={index}>
                        <p>Project name: {project.name} </p>
                        <div>pipelines:{
                            project.pipelines.map((pipeline, index) => {
                                return <div key={index}>{pipeline.commitMessage}</div>
                            })
                        }
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default CompletedPipelineList;
