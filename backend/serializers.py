from rest_framework import serializers
from .models import Project, Pipeline, Runner, Job


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'name', 'web_url']


class PipelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pipeline
        fields = ['id', 'project_id', 'status', 'branch_ref', 'commit_id', 'commit_author', 'commit_message',
                  'created_at', 'updated_at', 'finished_at', 'web_url']


class RunnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Runner
        fields = ['id', 'name', 'description', 'status']


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'pipeline_id', 'stage', 'name', 'status', 'web_url']
