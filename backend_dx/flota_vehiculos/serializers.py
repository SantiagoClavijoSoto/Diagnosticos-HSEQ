from rest_framework import serializers
from .models import Flota_vehiculos


class FlotaVehiculosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flota_vehiculos
        fields = (
            "id_flota_vehiculos",
            "numero_motocicletas_patinetas_propios",
            "numero_motocicletas_patinetas_terceros",
            "numero_vehiculos_livianos_propios",
            "numero_vehiculos_livianos_terceros",
            "numero_vehiculos_pesados_propios",
            "numero_vehiculos_pesados_terceros",
            "numero_vehiculos_furgon_propios",
            "numero_vehiculos_furgon_terceros",
            "numero_vehiculos_carga_propios",
            "numero_vehiculos_carga_terceros",
            "numero_maquinaria_amarilla_propios",
            "numero_maquinaria_amarilla_terceros",
            "numero_vehiculos_no_automotores_propios",
            "numero_vehiculos_no_automotores_terceros",
            "total_vehiculos",
        )
