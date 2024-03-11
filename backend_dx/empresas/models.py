from django.db import models


class Empresas(models.Model):
    id_empresa = models.AutoField(primary_key=True)
    nombre_empresa = models.CharField(max_length=255)
    nit_empresa = models.CharField(max_length=255)
    actividades_CIIU = models.CharField(max_length=255)
    tamano_empresa = models.CharField(max_length=255)
    correo_electronico = models.CharField(max_length=255)
    segmento_perteneciente = models.CharField(max_length=255)
    contacto_cargo = models.CharField(max_length=255)
    certificaciones_adquiridas = models.CharField(max_length=255)
    dx_realizados = models.CharField(max_length=255)

    class Meta:
        db_table = "empresas"
        managed = False
