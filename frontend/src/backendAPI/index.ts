import {Project, Pipeline, PipelineResponse, Runner, ProjectResponse, Job, JobResponse} from "../models/models";

// const BACKEND_API_ROOT_URL = "http://localhost:8000/backend/";
const BACKEND_API_ROOT_URL = "http://gitlab-dashboard.pandawork.com/backend/";

async function fetchProjects(){
    return fetch(BACKEND_API_ROOT_URL+"projects/")
      .then(res => res.json())
      .then(
        (result) => {
          const projectList:Project[]=[];
          result.forEach((p:ProjectResponse) => {
            const newProject:Project = {id: p.id, name:p.name, webUrl: p.web_url};
            projectList.push(newProject);
          });
          return projectList;
        },
        (error) => {
          console.log(error);
        }
      )
}

async function fetchPipelines(){
    return fetch(BACKEND_API_ROOT_URL+"pipelines/")
    .then(res => res.json())
    .then(
      (result) => {
          const pipelineList:Pipeline[]=[];
          result.forEach((p:PipelineResponse)=>{
              const newPipeline:Pipeline = {id: p.id, projectId:p.project_id, status:p.status,branchRef:p.branch_ref, commitId:p.commit_id, commitAuthor:p.commit_author,commitMessage:p.commit_message, createdAt:p.created_at, updatedAt:p.updated_at, finishedAt:p.finished_at, webUrl: p.web_url}
              pipelineList.push(newPipeline);
          });
          return pipelineList;
      },
      (error) => {
        console.log(error);
      }
    )
}

async function fetchRunners(){
    return fetch(BACKEND_API_ROOT_URL+"runners/")
      .then(res => res.json())
      .then(
        (result) => {
            const runnerList:Runner[]=[];
            result.forEach((r:Runner)=>{
                const newRunner:Runner = {id: r.id, name:r.name, description:r.description, status: r.status};
                runnerList.push(newRunner);
            });
            return runnerList;
        },
        (error) => {
          console.log(error);
        }
      )
}

async function fetchJobs(){
    return fetch(BACKEND_API_ROOT_URL+"jobs/")
      .then(res => res.json())
      .then(
        (result) => {
            const jobList:Job[]=[];
            result.forEach((j:JobResponse)=>{
                const newJob:Job = {id: j.id, pipelineId: j.pipeline_id, name:j.name, stage: j.stage, status: j.status, webUrl: j.web_url};
                jobList.push(newJob);
            });
            return jobList;
        },
        (error) => {
          console.log(error);
        }
      )
}

export function fetchFromBackend(setProjectList:any, setPipelineList:any, setRunnerList:any, setJobList: any){
    fetchProjects().then((result)=>{
        setProjectList(result);
    });
    
    fetchPipelines().then((result)=>{
        setPipelineList(result);
    })
    
    fetchRunners().then((result)=>{
        setRunnerList(result);
    })

    fetchJobs().then((result)=>{
      setJobList(result);
    })

}