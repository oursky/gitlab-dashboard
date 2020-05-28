import React, {useState, useEffect} from 'react';
import {Project, Pipeline, ProjectViewModel, Job} from '../models/models';
import {filterQueuedPipeline, generateProjectViewModel} from '../utils/utils';
import PipelineProjectGenericView from '../components/PipelineProjectGenericView';

interface Props {
    projects: Project[];
    pipelines: Pipeline[];
    jobs: Job[];
}

const CompletedPipelineListContainer = (props: Props) => {
    const [projectViewList, setProjectViewList] = useState<ProjectViewModel[]>([]);

    useEffect(() => {
        const completedPipelineList = filterQueuedPipeline(props.pipelines, false);
        const projectViewModelList: ProjectViewModel[] = generateProjectViewModel(props.projects, completedPipelineList, props.jobs);
        setProjectViewList(projectViewModelList);
    }, [props.pipelines, props.projects, props.jobs]);

    return (
        <div>
            <PipelineProjectGenericView projectsView={projectViewList}></PipelineProjectGenericView>
        </div>
    )
}

export default CompletedPipelineListContainer;