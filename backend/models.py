from django.db import models

# Create your models here.


class Project(models.Model):
    projectId = models.CharField(max_length=100)
