from django.urls import path
from . import views

urlpatterns = [
     path('login/', views.AutenticacionView.as_view()),
     path('logout/', views.LogoutView.as_view(), name ='logout')
]