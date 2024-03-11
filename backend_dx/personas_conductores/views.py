from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Personas_conductores
from .serializers import PersonasConductoresSerializer


class PersonasConductoresView(APIView):
    # GET
    def get_conductores(self, pk):
        try:
            conductores = Personas_conductores.objects.get(id_personas=pk)
            return conductores
        except Personas_conductores.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_conductores(pk)
            serializer = PersonasConductoresSerializer(data)
        else:
            data = Personas_conductores.objects.all()
            serializer = PersonasConductoresSerializer(data, many=True)
        return Response(serializer.data)

    # POST
    def post(self, request):
        data = request.data
        serializer = PersonasConductoresSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Conductores agregados exitosamente.", safe=False)
        return JsonResponse("No se pudo agregar conductores.", safe=False)

    # PUT
    def put(self, request, pk=None):
        personas_conductores_to_update = Personas_conductores.objects.get(
            id_personas=pk
        )
        serializer = PersonasConductoresSerializer(
            instance=personas_conductores_to_update, data=request.data, partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Conductores actualizados con éxito", safe=False)
        return JsonResponse("No se pudo actualizar conductores.")

    # DELETE
    def delete(self, request, pk):
        personas_conductores_to_delete = Personas_conductores.objects.get(id_personas=pk)
        personas_conductores_to_delete.delete()
        return JsonResponse("Conductores eliminados exitosamente", safe=False)
