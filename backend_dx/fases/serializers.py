from rest_framework import serializers
from .models import Fase1, Fase2, Fase3, Fase4

class FasesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fase1 # Se asignará dinámicamente en la vista
        fields = '__all__'
        # model = Fase1, Fase2, Fase3, Fase4
        # fields = ('id',
        #           'item_pesv',
        #           'ciclo',
        #           'paso_pesv',
        #           'requisito',
        #           'criterio',
        #           'documento_verificar',
        #           'nivel_cumplimiento',
        #           'valor_variable',
        #           'valor_obtenido',
        #           'observaciones')