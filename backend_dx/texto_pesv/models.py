# from django.db import models


# class TextoPesv(models.Model):
#     _id = models.CharField(max_length=255, primary_key=True)
#     paso = models.IntegerField()
#     descripcion = models.TextField()

#     class Meta:
#         managed = False

#     def __str__(self):
#         return f"Paso {self.paso}: {self.descripcion}"


# models.py
from djongo import models


class Paso(models.Model):
    paso = models.IntegerField()
    descripcion = models.TextField()
