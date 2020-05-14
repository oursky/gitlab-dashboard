import React, {useState, useEffect} from 'react';
import QueuingPipelineList from '../components/QueuingPipelineList';
import {Project, Pipeline, ProjectViewModel} from '../models/models';
import {filterQueuedPipeline, generateProjectViewModel} from '../utils/utils';

interface Props {
    projects: Project[];
    pipelines: Pipeline[];
}

const QueuingPipelineListContainer = (props: Props) => {
    const [projectViewList, setProjectViewList] = useState<ProjectViewModel[]>([]);

    useEffect(() => {
        const queuedPipelineList = filterQueuedPipeline(props.pipelines, true);
        const projectViewModelList: ProjectViewModel[] = generateProjectViewModel(props.projects, queuedPipelineList);
        setProjectViewList(projectViewModelList);
    }, [props.pipelines, props.projects]);

    return (
        <div>
            <QueuingPipelineList projectsView={projectViewList}></QueuingPipelineList>
        </div>
    )
}

export default QueuingPipelineListContainer;