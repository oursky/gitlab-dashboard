export interface Project {
  id: string;
  name: string;
  webUrl: string;
}

export interface ProjectResponse {
  id: string;
  name: string;
  web_url: string;
}

export interface Pipeline {
  id: string;
  projectId: string;
  status: PipelineStatus;
  branchRef: string;
  commitId: string; // sha
  commitAuthor: string;
  commitMessage: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  finishedAt: Date | null;
  webUrl: string;
}

export interface PipelineResponse {
  id: string;
  project_id: string;
  status: PipelineStatus;
  branch_ref: string;
  commit_id: string; // sha
  commit_author: string;
  commit_message: string;
  created_at: Date | null;
  updated_at: Date | null;
  finished_at: Date | null;
  web_url: string;
}

export enum PipelineStatus {
  RUNNING = 'running',
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELED = 'canceled',
  SKIPPED = 'skipped',
  CREATED = 'created',
  MANUAL = 'manual',
}

export interface Runner {
  id: string;
  name: string;
  description: string;
  status: RunnerStatus;
}

export enum RunnerStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  ONLINE = 'online',
  OFFLINE = 'offline',
  NOTCONNECTED = 'not_connected'
}

export interface ProjectViewModel {
  project: Project;
  pipelines: Pipeline[];
}