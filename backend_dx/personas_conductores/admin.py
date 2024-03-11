from django.contrib import admin
from .models import Personas_conductores

models_list = [Personas_conductores]
admin.site.register(models_list)
