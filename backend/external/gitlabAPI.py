import requests
from backend.models import Project


def getProjectIdFromApi():
    r = requests.get('https://gitlab.com/api/v4/users/5758391/projects/')
    print(r.json()[0]['id'])
    newId = r.json()[0]['id']
    p = Project(projectId=newId)
    p.save()
    print(p)
