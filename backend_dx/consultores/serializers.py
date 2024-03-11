from rest_framework import serializers
from .models import Consultor

class ConsultorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultor
        fields = ('id_consultor',
                  'nombres',
                  'apellidos',
                  'numero_cedula',
                  'contrasena',
                  'correo_electronico',
                  'ultimo_ingreso',
                  'cargo',
                  'licencia_SST')