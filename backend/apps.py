from django.apps import AppConfig
import threading
import schedule
import time

GITLAB_API_FETCH_INTERVAL = 30


def fetchJob():
    from backend.external.gitlabAPI import executeFetch
    print("fetch start")
    executeFetch()
    print("fetch completed")


def worker():
    schedule.every(GITLAB_API_FETCH_INTERVAL).seconds.do(fetchJob)
    while True:
        schedule.run_pending()
        time.sleep(1)


class BackendConfig(AppConfig):
    name = 'backend'

    def ready(self):
        t = threading.Thread(target=worker)
        t.start()
