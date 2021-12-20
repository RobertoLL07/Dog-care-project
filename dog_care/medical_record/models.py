from django.db import models

# Create your models here.


class Medical(models.Model):
    date = models.DateField(max_length=100)
    description = models.TextField(max_length=100)

    def __str__(self):
        return str(self.name)
