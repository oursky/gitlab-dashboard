from rest_framework import serializers
from .models import Project, Pipeline, Runner


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'name']


class PipelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pipeline
        fields = ['id', 'project_id', 'status', 'branch_ref', 'commit_id', 'commit_author', 'commit_message',
                  'created_at', 'updated_at', 'finished_at']


class RunnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Runner
        fields = ['id', 'name', 'description', 'status']
