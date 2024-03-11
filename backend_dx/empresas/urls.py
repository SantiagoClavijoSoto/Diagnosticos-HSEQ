from django.urls import path
from .views import EmpresasView

urlpatterns = [
    path('empresas/', EmpresasView.as_view()),
    path('empresas/<int:pk>/', EmpresasView.as_view())
]