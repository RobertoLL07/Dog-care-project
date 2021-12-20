from django.urls import include, path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()

router.register(r'Medical', MedicalViewSet)


urlpatterns = [
    path('', include(router.urls)),
]