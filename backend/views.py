from django.shortcuts import render
from .models import Project, Pipeline, Runner
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ProjectSerializer, PipelineSerializer, RunnerSerializer

# Create your views here.
from django.http import HttpResponse


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class PipelineViewSet(viewsets.ModelViewSet):
    queryset = Pipeline.objects.all()
    serializer_class = PipelineSerializer


class RunnerViewSet(viewsets.ModelViewSet):
    queryset = Runner.objects.all()
    serializer_class = RunnerSerializer


def index(request):
    return HttpResponse("Hello, world. You're at the backends index.")
