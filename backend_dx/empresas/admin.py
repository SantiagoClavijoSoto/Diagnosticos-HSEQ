from django.contrib import admin
from .models import Empresas

models_list = [Empresas]
admin.site.register(models_list)
