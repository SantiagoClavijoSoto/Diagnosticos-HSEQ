from django.urls import path
from .views import obtener_paso_por_numero, pasos


urlpatterns = [
    path("obtener_pasos/", pasos, name="obtener_todos_los_pasos"),
    path("obtener_pasos/<int:paso>/", obtener_paso_por_numero, name="obtener_paso"),
]
