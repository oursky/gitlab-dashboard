from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectViewSet)
router.register(r'pipelines', views.PipelineViewSet)
router.register(r'runners', views.RunnerViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
