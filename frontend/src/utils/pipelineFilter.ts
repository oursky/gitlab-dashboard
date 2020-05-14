import {Pipeline, PipelineStatus} from '../models/models';

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