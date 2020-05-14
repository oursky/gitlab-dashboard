import {Pipeline, PipelineStatus, Project, ProjectViewModel} from '../models/models';

export const filterQueuedPipeline = function (pipelines: Pipeline[], isQueued: boolean): Pipeline[] {

    const result:Pipeline[]=[];
    pipelines.forEach((pipeline)=>{
        if(pipeline.status===PipelineStatus.CREATED || pipeline.status===PipelineStatus.PENDING || pipeline.status===PipelineStatus.RUNNING ){
            if(isQueued) result.push(pipeline);
        }else{
            if(!isQueued) result.push(pipeline);
        }
    })
    return result;
}

export const generateProjectViewModel = function(projects: Project[], pipelines: Pipeline[]): ProjectViewModel[] {
    const projectViewList: ProjectViewModel[] = [];
    projects.forEach((project)=>{
        const projectView:ProjectViewModel = {id: project.id, name:project.name, pipelines:[]};
        pipelines.forEach((pipeline)=>{
            if(pipeline.projectId === project.id)projectView.pipelines.push(pipeline);
        })
        projectViewList.push(projectView);
    })
    return projectViewList;
}