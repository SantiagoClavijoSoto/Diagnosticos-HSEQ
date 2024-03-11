from rest_framework import serializers
from .models import Personas_conductores


class PersonasConductoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personas_conductores
        fields = (
            "id_personas",
            "trabajadores_directos_conductores",
            "trabajadores_adminsitrativos_conductores",
            "contratistas_conductores",
            "personal_tercerizacion_conductores",
            "otros_conductores",
        )
