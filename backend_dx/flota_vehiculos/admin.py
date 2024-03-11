from django.contrib import admin
from .models import Flota_vehiculos

models_list = [Flota_vehiculos]
admin.site.register(models_list)
