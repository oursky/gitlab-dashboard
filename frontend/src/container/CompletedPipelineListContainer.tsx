import React, {useState, useEffect} from 'react';
import CompletedPipelineList from '../components/CompletedPipelineList';
import {Project, Pipeline} from '../models/models';
import {filterQueuedPipeline} from '../utils/pipelineFilter';

interface Props {
    projects: Project[];
    pipelines: Pipeline[];
}

const CompletedPipelineListContainer = (props: Props) => {
    const [projectList, setProjectList] = useState<Project[]>([]);
    const [pipelineList, setPipelineList] = useState<Pipeline[]>([]);

    useEffect(() => {
        setProjectList(props.projects);
        const CompletedPipelineList = filterQueuedPipeline(props.pipelines, false);
        setPipelineList(CompletedPipelineList);
    }, [props.pipelines, props.projects]);

    return (
        <div>
            <CompletedPipelineList projects={projectList} pipelines={pipelineList}></CompletedPipelineList>
        </div>
    )
}

export default CompletedPipelineListContainer;