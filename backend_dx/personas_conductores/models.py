from django.db import models


class Personas_conductores(models.Model):
    id_personas = models.AutoField(primary_key=True)
    trabajadores_directos_conductores = models.CharField(max_length=255)
    trabajadores_adminsitrativos_conductores = models.CharField(max_length=255)
    contratistas_conductores = models.CharField(max_length=255)
    personal_tercerizacion_conductores = models.CharField(max_length=255)
    otros_conductores = models.CharField(max_length=255)

    class Meta:
        db_table = "personas_conducen_caracterizacion"
        managed = False
