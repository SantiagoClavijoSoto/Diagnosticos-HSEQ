from rest_framework import serializers
from .models import Empresas

class EmpresasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresas
        fields = ('id_empresa',
                  'nombre_empresa',
                  'nit_empresa',
                  'actividades_CIIU',
                  'tamano_empresa',
                  'correo_electronico',
                  'segmento_perteneciente',
                  'contacto_cargo',
                  'certificaciones_adquiridas',
                  'dx_realizados'
                  )