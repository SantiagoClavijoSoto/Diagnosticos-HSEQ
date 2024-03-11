from django.db import models


class Flota_vehiculos(models.Model):
    id_flota_vehiculos = models.AutoField(primary_key=True)
    numero_motocicletas_patinetas_propios = models.CharField(max_length=255)
    numero_motocicletas_patinetas_terceros = models.CharField(max_length=255)
    numero_vehiculos_livianos_propios = models.CharField(max_length=255)
    numero_vehiculos_livianos_terceros = models.CharField(max_length=255)
    numero_vehiculos_pesados_propios = models.CharField(max_length=255)
    numero_vehiculos_pesados_terceros = models.CharField(max_length=255)
    numero_vehiculos_furgon_propios = models.CharField(max_length=255)
    numero_vehiculos_furgon_terceros = models.CharField(max_length=255)
    numero_vehiculos_carga_propios = models.CharField(max_length=255)
    numero_vehiculos_carga_terceros = models.CharField(max_length=255)
    numero_maquinaria_amarilla_propios = models.CharField(max_length=255)
    numero_maquinaria_amarilla_terceros = models.CharField(max_length=255)
    numero_vehiculos_no_automotores_propios = models.CharField(max_length=255)
    numero_vehiculos_no_automotores_terceros = models.CharField(max_length=255)
    total_vehiculos = models.CharField(max_length=255)

    class Meta:
        db_table = "flota_vehiculos_caracterizacion"
        managed = False
