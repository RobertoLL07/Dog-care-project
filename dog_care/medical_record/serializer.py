from rest_framework import serializers
from .models import Medical


class MedicalSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Medical
        fields = ['date', 'description']
