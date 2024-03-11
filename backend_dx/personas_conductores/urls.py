from django.urls import path
from .views import PersonasConductoresView

urlpatterns = [
    path(
        "personas_conductores/", PersonasConductoresView.as_view(), name="lista-conductores"
    ),
    path(
        "personas_conductores/<int:pk>/",
        PersonasConductoresView.as_view(),
        name="personas-conductores-id",
    ),
]
