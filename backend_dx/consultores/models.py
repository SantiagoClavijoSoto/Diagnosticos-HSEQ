from django.db import models
from django.contrib.auth.hashers import make_password

class Consultor(models.Model):
    id_consultor = models.AutoField(primary_key=True)
    nombres = models.CharField(max_length=200)
    apellidos = models.CharField(max_length=200)
    numero_cedula = models.CharField(max_length=200)
    contrasena = models.CharField(max_length=128)
    correo_electronico = models.CharField(max_length=200)
    ultimo_ingreso = models.CharField(max_length=200)
    cargo = models.CharField(max_length=200)
    licencia_SST = models.CharField(max_length=200)
        
    def save(self, *args, **kwargs):
        self.contrasena = make_password(self.contrasena)
        super(Consultor, self).save(*args, **kwargs)
        
    class Meta:
        db_table = "consultores"
        managed = False