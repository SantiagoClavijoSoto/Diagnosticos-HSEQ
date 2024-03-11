from django.contrib import admin
from .models import Consultor

# Register your models here.
models_list = [Consultor]
admin.site.register(models_list)
