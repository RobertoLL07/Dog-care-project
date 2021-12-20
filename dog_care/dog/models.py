from django.db import models

# Create your models here.


class Dog(models.Model):
    name = models.TextField(max_length=100)
    age = models.IntegerField()
    weight = models.IntegerField()
    breed = models.TextField(max_length=100)
    image = models.TextField()

    def __str__(self):
        return str(self.name)
