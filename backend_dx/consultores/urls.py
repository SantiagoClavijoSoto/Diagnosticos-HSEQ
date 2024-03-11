from django.urls import path
from .views import ConsultorView

urlpatterns = [
    path('consultores/', ConsultorView.as_view()),
    path('consultores/<int:pk>/', ConsultorView.as_view())
]