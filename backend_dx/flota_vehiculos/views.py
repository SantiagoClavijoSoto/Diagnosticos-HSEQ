from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Flota_vehiculos
from .serializers import FlotaVehiculosSerializer


class FlotaVehiculosView(APIView):
    # GET
    def get_vehiculos(self, pk):
        try:
            vehiculos = Flota_vehiculos.objects.get(id_flota_vehiculos=pk)
            return vehiculos
        except Flota_vehiculos.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_vehiculos(pk)
            serializer = FlotaVehiculosSerializer(data)
        else:
            data = Flota_vehiculos.objects.all()
            serializer = FlotaVehiculosSerializer(data, many=True)
        return Response(serializer.data)

    # POST
    def post(self, request):
        data = request.data
        serializer = FlotaVehiculosSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Flota de vehículos agregada exitosamente.", safe=False)
        return JsonResponse("No se pudo agregar flota de vehículos.", safe=False)

    # PUT
    def put(self, request, pk=None):
        flota_vehiculos_to_update = Flota_vehiculos.objects.get(id_flota_vehiculos=pk)
        serializer = FlotaVehiculosSerializer(
            instance=flota_vehiculos_to_update, data=request.data, partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Flota de vehículos actualizada con éxito", safe=False)
        return JsonResponse("No se pudo actualizar la flota de vehículos.")

    # DELETE
    def delete(self, request, pk):
        flota_vehiculos_to_delete = Flota_vehiculos.objects.get(id_flota_vehiculos=pk)
        flota_vehiculos_to_delete.delete()
        return JsonResponse("Flota de vehículos eliminada exitosamente", safe=False)
