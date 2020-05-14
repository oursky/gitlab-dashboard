export interface Project {
  id: string;
  name: string;
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
  status: string;
}

export enum RunnerStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  ONLINE = 'online',
  OFFLINE = 'offline',
}