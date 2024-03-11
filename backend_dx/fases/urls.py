from django.urls import path
from .views import FasesView
from .views import generar_informe

urlpatterns = [
    path('fases/<int:fase_number>/', FasesView.as_view(), name='lista-de-fases'),
    path('fases/<int:fase_number>/<int:pk>/', FasesView.as_view(), name='detalle-de-las-fases'),
    path('generar-informe/', generar_informe, name='generar_informe'),
]