import os
import requests
from backend.models import Project, Pipeline, Runner, Job
from dotenv import load_dotenv
from pathlib import Path
GITLAB_USER_ID = os.getenv("GITLAB_USER_ID")
GITLAB_PRIVATE_TOKEN = os.getenv("GITLAB_PRIVATE_TOKEN")

# TODO: add requests access token header


def executeFetch():
    fetchProject()
    fetchPipeline()
    fetchRunner()


def fetchProject():
    url = 'https://gitlab.com/api/v4/users/' + \
        str(GITLAB_USER_ID) + '/projects'
    r = requests.get(url)
    project_list = r.json()
    for p in project_list:
        project = Project(id=p['id'], name=p['name'], web_url=p['web_url'])
        project.save()


def fetchPipeline():
    project_list = Project.objects.all()
    for p in project_list:
        p_id = p.id
        project_url = 'https://gitlab.com/api/v4/projects/' + p_id + '/pipelines'
        project_response = requests.get(project_url)
        pipeline_list = project_response.json()
        for p in pipeline_list:
            if Pipeline.objects.all().filter(id=p['id']).count() > 0 and Pipeline.objects.all().filter(id=p['id'])[0].status == 'success':
                continue
            pipeline_id = str(p['id'])
            pipeline_url = project_url + '/' + pipeline_id
            pipeline_response = requests.get(pipeline_url)
            pipeline_data = pipeline_response.json()
            commit_id = pipeline_data['sha']
            commit_url = 'https://gitlab.com/api/v4/projects/' + \
                p_id + '/repository/commits/' + commit_id
            commit_response = requests.get(commit_url)
            commit_data = commit_response.json()
            pipeline = Pipeline(id=pipeline_data['id'], project_id=p_id, status=pipeline_data['status'], branch_ref=pipeline_data['ref'], commit_id=pipeline_data['sha'], commit_author=pipeline_data['user']
                                ['name'], commit_message=commit_data['message'], created_at=pipeline_data['created_at'], updated_at=pipeline_data['updated_at'], finished_at=pipeline_data['finished_at'], web_url=pipeline_data['web_url'])
            pipeline.save()
            fetchJob(pipeline.project_id, pipeline.id)


def fetchJob(project_id, pipe_id):
    pipeline_jobs_url = 'https://gitlab.com/api/v4/projects/' + \
        str(project_id) + '/pipelines/' + str(pipe_id) + '/jobs'
    pipeline_jobs_response = requests.get(pipeline_jobs_url, headers={
                                          'PRIVATE-TOKEN': GITLAB_PRIVATE_TOKEN})
    job_list = pipeline_jobs_response.json()

    for j in job_list:
        job = Job(id=j['id'], pipeline_id=j['pipeline']['id'], stage=j['stage'],
                  name=j['name'], status=j['status'], web_url=j['web_url'])
        job.save()


def fetchRunner():
    url = 'https://gitlab.com/api/v4/runners'
    # TODO: store private token properly
    res = requests.get(url, headers={'PRIVATE-TOKEN': GITLAB_PRIVATE_TOKEN})
    runner_list = res.json()
    for r in runner_list:
        runner = Runner(id=r['id'], name=r['name'],
                        description=r['description'], status=r['status'])
        runner.save()
