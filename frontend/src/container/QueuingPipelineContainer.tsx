import React, {useState, useEffect} from 'react';
import {Project, Pipeline, ProjectViewModel, Job} from '../models/models';
import {filterQueuedPipeline, generateProjectViewModel} from '../utils/utils';
import PipelineProjectGenericView from '../components/PipelineProjectGenericView';

interface Props {
    projects: Project[];
    pipelines: Pipeline[];
    jobs: Job[];
}

const QueuingPipelineListContainer = (props: Props) => {
    const [projectViewList, setProjectViewList] = useState<ProjectViewModel[]>([]);

    useEffect(() => {
        const queuedPipelineList = filterQueuedPipeline(props.pipelines, true);
        const projectViewModelList: ProjectViewModel[] = generateProjectViewModel(props.projects, queuedPipelineList, props.jobs);
        setProjectViewList(projectViewModelList);
    }, [props.pipelines, props.projects, props.jobs]);

    return (
        <div>
            <PipelineProjectGenericView projectsView={projectViewList}></PipelineProjectGenericView>
        </div>
    )
}

export default QueuingPipelineListContainer;