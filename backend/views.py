from django.shortcuts import render
from .models import Project
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ProjectSerializer

# Create your views here.
from django.http import HttpResponse


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


def index(request):
    return HttpResponse("Hello, world. You're at the backends index.")
