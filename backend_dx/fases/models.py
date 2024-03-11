from django.db import models


class Fase(models.Model):
    item_pesv = models.CharField(max_length=255)
    ciclo = models.CharField(max_length=255)
    paso_pesv = models.CharField(max_length=255)
    requisito = models.CharField(max_length=255)
    criterio = models.CharField(max_length=2048)
    documento_verificar = models.CharField(max_length=255)
    nivel_cumplimiento = models.CharField(max_length=255)
    valor_variable = models.CharField(max_length=255)
    valor_obtenido = models.CharField(max_length=255)
    observaciones = models.CharField(max_length=255)

    class Meta:
        abstract = True  # Marcar la clase como abstracta


class Fase1(Fase):
    class Meta:
        db_table = "fase1_pesv"
        managed = False


class Fase2(Fase):
    class Meta:
        db_table = "fase2_pesv"
        managed = False


class Fase3(Fase):
    class Meta:
        db_table = "fase3_pesv"
        managed = False


class Fase4(Fase):
    class Meta:
        db_table = "fase4_pesv"
        managed = False