import React, {useState, useEffect} from 'react';
import {Project, Pipeline, ProjectViewModel} from '../models/models';
import {filterQueuedPipeline, generateProjectViewModel} from '../utils/utils';
import PipelineProjectGenericView from '../components/PipelineProjectGenericView';

interface Props {
    projects: Project[];
    pipelines: Pipeline[];
}

const CompletedPipelineListContainer = (props: Props) => {
    const [projectViewList, setProjectViewList] = useState<ProjectViewModel[]>([]);

    useEffect(() => {
        const completedPipelineList = filterQueuedPipeline(props.pipelines, false);
        const projectViewModelList: ProjectViewModel[] = generateProjectViewModel(props.projects, completedPipelineList);
        setProjectViewList(projectViewModelList);
    }, [props.pipelines, props.projects]);

    return (
        <div>
            <PipelineProjectGenericView projectsView={projectViewList}></PipelineProjectGenericView>
        </div>
    )
}

export default CompletedPipelineListContainer;