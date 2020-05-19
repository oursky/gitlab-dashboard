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

export const truncatedText = function(input: String, maxLength: number) {
    const dotReservedLength = 3;
    return input.length <= maxLength ? input : input.slice(0, maxLength-dotReservedLength) + "...";
}

export const displayDateFromNow = function(input: Date) {
    const now = Date.now();
    const past = new Date(input).getTime();
    const differenceInSec = Math.floor((now - past) / 1000);
    const differenceInMin = Math.floor(differenceInSec/60);
    const differenceInHr = Math.floor(differenceInMin/60);
    if(differenceInHr < 1){
        return differenceInMin % 60 + "min " + differenceInSec % 60 + "sec ago";
    }
    const differenceInDay = Math.floor(differenceInHr/24);
    if(differenceInDay < 1){
        return differenceInHr % 24 + "hr " + differenceInMin % 60 + "min ago";
    }else{
        return differenceInDay + "day " + differenceInHr % 24 + "hr ago";
    }
}