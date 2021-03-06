from django.db import models

# Create your models here.


class Project(models.Model):
    id = models.CharField(max_length=32, primary_key=True)
    name = models.CharField(max_length=128)
    web_url = models.CharField(default="none", max_length=256)


class Pipeline(models.Model):
    id = models.CharField(max_length=32, primary_key=True)
    project_id = models.CharField(max_length=32)
    status = models.CharField(max_length=32)
    branch_ref = models.CharField(max_length=128)
    commit_id = models.CharField(max_length=32)
    commit_author = models.CharField(max_length=32)
    commit_message = models.CharField(max_length=128)
    created_at = models.DateTimeField(default=None, blank=True, null=True)
    updated_at = models.DateTimeField(default=None, blank=True, null=True)
    finished_at = models.DateTimeField(default=None, blank=True, null=True)
    web_url = models.CharField(default="none", max_length=256)


class Runner(models.Model):
    id = models.CharField(max_length=32, primary_key=True)
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=256)
    status = models.CharField(max_length=32)


class Job(models.Model):
    id = models.CharField(max_length=32, primary_key=True)
    pipeline_id = models.CharField(max_length=32)
    stage = models.CharField(max_length=128)
    name = models.CharField(max_length=128)
    status = models.CharField(max_length=32)
    web_url = models.CharField(default="none", max_length=256)
