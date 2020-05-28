import {Pipeline, PipelineJobStatus, Project, ProjectViewModel, Job, PipelineViewModel} from '../models/models';

export const filterQueuedPipeline = function (pipelines: Pipeline[], isQueued: boolean): Pipeline[] {

    const result:Pipeline[]=[];
    pipelines.forEach((pipeline)=>{
        if(pipeline.status===PipelineJobStatus.CREATED || pipeline.status===PipelineJobStatus.PENDING || pipeline.status===PipelineJobStatus.RUNNING ){
            if(isQueued) result.push(pipeline);
        }else{
            if(!isQueued) result.push(pipeline);
        }
    })
    return result;
}

export const generateProjectViewModel = function(projects: Project[], pipelines: Pipeline[], jobs: Job[]): ProjectViewModel[] {
    const projectViewList: ProjectViewModel[] = [];
    projects.forEach((p)=>{
        const projectView:ProjectViewModel = {project: p, pipelines:[]};
        const candidatePipelineView:PipelineViewModel[] = []; 
        pipelines.forEach((pipeline)=>{
            if(pipeline.projectId === p.id){
                const pipelineView = {pipeline: pipeline, jobs: []}
                candidatePipelineView.push(pipelineView);
            }
        })
        candidatePipelineView.sort((a:PipelineViewModel,b:PipelineViewModel)=>{
            const dateA = new Date(a.pipeline.createdAt?a.pipeline.createdAt:"");
            const dateB = new Date(b.pipeline.createdAt?b.pipeline.createdAt:"");
            return dateB.getTime()-dateA.getTime();
        });
        const listLength = 5;
        candidatePipelineView.forEach((pipelineView, index)=>{
            jobs.forEach((job)=>{
                if(job.pipelineId === pipelineView.pipeline.id){
                    pipelineView.jobs.push(job)
                }
            })
            if(index < listLength)projectView.pipelines.push(pipelineView);
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

export const redirectToWebsite = function(url: string){
    window.location.href=url;
}