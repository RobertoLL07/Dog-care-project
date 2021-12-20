from rest_framework import serializers
from .models import Dog


class DogSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Dog
        fields = ['name', 'age', 'weight', 'breed', 'image']
