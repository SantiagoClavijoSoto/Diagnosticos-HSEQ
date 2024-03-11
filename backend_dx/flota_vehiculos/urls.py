from django.urls import path
from .views import FlotaVehiculosView

urlpatterns = [
    path(
        "flota_vehiculos/", FlotaVehiculosView.as_view(), name="lista-flota-vehiculos"
    ),
    path(
        "flota_vehiculos/<int:pk>/",
        FlotaVehiculosView.as_view(),
        name="flota-vehiculos-id",
    ),
]
