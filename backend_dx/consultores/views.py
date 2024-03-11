from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Consultor
from .serializers import ConsultorSerializer


# Create your views here.
class ConsultorView(APIView):
    
    # GET
    def get_consultor(self, pk):
        try:
            consultor = Consultor.objects.get(id_consultor=pk)
            return consultor
        except Consultor.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_consultor(pk)
            serializer = ConsultorSerializer(data)
        else:
            data = Consultor.objects.all()
            serializer = ConsultorSerializer(data, many=True)
        return Response(serializer.data)

    # POST
    def post(self, request):
        data = request.data
        serializer = ConsultorSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Consultor agregado exitosamente", safe=False)
        return JsonResponse("No se pudo agregar consultor", safe=False)
    
    # PUT
    def put(self, request, pk=None):
        consultor_to_update = Consultor.objects.get(id_consultor=pk)
        serializer = ConsultorSerializer(instance=consultor_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Consultor actualizado con éxito", safe=False)
        return JsonResponse("No se pudo actualizar el Consultor")
    
    #DELETE
    def delete(self, request, pk):
        consultor_to_delete = Consultor.objects.get(id_consultor=pk)
        consultor_to_delete.delete()
        return JsonResponse("Consultor eliminado exitosamente", safe=False)