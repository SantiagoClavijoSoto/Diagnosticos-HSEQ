from rest_framework import status
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

class AutenticacionView(APIView):
     
   permission_classes = (IsAuthenticated,)
   def get(self, request):
       content = {'message': 'Bienvenido a la página de autenticación JWT usando React Js y Django!'}
       return Response(content)

class LogoutView(APIView):
     permission_classes = (IsAuthenticated,)
     def post(self, request):
          
          try:
              refresh_token = request.data["refresh_token"]
              token = RefreshToken(refresh_token)
              token.blacklist()
              return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)