from django.apps import AppConfig
import threading
import schedule
import time

GITLAB_API_FETCH_INTERVAL = 20
FETCH_ENABLED = True


def fetch_job():
    from backend.external.gitlabAPI import execute_fetch
    print("fetch start")
    execute_fetch()
    print("fetch completed")


def worker():
    schedule.every(GITLAB_API_FETCH_INTERVAL).seconds.do(fetch_job)
    while True:
        schedule.run_pending()
        time.sleep(1)


def clear_database():
    from backend.models import Project, Pipeline, Job, Runner
    Project.objects.all().delete()
    Pipeline.objects.all().delete()
    Job.objects.all().delete()
    Runner.objects.all().delete()


class BackendConfig(AppConfig):
    name = 'backend'

    def ready(self):
        clear_database()
        print("fetch enabled: " + str(FETCH_ENABLED))
        if FETCH_ENABLED:
            t = threading.Thread(target=worker)
            t.start()
