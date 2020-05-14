import React, {useState, useEffect} from 'react';
import QueuingPipelineList from '../components/QueuingPipelineList';
import {Project, Pipeline} from '../models/models';

interface Props {
    projects: Project[];
    pipelines: Pipeline[];
}

const QueuingPipelineListContainer = (props: Props) => {
    const [projectList, setProjectList] = useState<Project[]>([]);
    const [pipelineList, setPipelineList] = useState<Pipeline[]>([]);

    useEffect(() => {
        setProjectList(props.projects);
        setPipelineList(props.pipelines);
    }, [props.pipelines, props.projects]);

    return (
        <div>
            <QueuingPipelineList projects={projectList} pipelines={pipelineList}></QueuingPipelineList>
        </div>
    )
}

export default QueuingPipelineListContainer;