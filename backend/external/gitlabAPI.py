import requests
from backend.models import Project, Pipeline, Runner
MOCK_USER_ID = '5758391'

# TODO: add requests access token header


def executeFetch():
    fetchProject()
    fetchPipeline()
    fetchRunner()


def fetchProject():
    url = 'https://gitlab.com/api/v4/users/' + MOCK_USER_ID + '/projects'
    r = requests.get(url)
    project_list = r.json()
    for p in project_list:
        project = Project(id=p['id'], name=p['name'])
        project.save()


def fetchPipeline():
    project_list = Project.objects.all()
    for p in project_list:
        p_id = p.id
        project_url = 'https://gitlab.com/api/v4/projects/' + p_id + '/pipelines'
        project_response = requests.get(project_url)
        pipeline_list = project_response.json()
        for p in pipeline_list:
            pipeline_id = str(p['id'])
            # TODO: check if record is in DB and is finished, if so do not fetch with request
            pipeline_url = project_url + '/' + pipeline_id
            pipeline_response = requests.get(pipeline_url)
            pipeline_data = pipeline_response.json()
            commit_id = pipeline_data['sha']
            commit_url = 'https://gitlab.com/api/v4/projects/' + \
                p_id + '/repository/commits/' + commit_id
            commit_response = requests.get(commit_url)
            commit_data = commit_response.json()
            pipeline = Pipeline(id=pipeline_data['id'], project_id=p_id, status=pipeline_data['status'], branch_ref=pipeline_data['ref'], commit_id=pipeline_data['sha'], commit_author=pipeline_data['user']
                                ['name'], commit_message=commit_data['message'], created_at=pipeline_data['created_at'], updated_at=pipeline_data['updated_at'], finished_at=pipeline_data['finished_at'])
            pipeline.save()


def fetchRunner():
    url = 'https://gitlab.com/api/v4/runners'
    # TODO: store private token properly
    privateTokenHolder = '1234567890ABCDEFGHIJ'
    res = requests.get(url, headers={'PRIVATE-TOKEN': privateTokenHolder})
    runner_list = res.json()
    for r in runner_list:
        runner = Runner(id=r['id'], name=r['name'],
                        description=r['description'], status=r['status'])
        runner.save()
