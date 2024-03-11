from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Empresas
from .serializers import EmpresasSerializer


class EmpresasView(APIView):
    # GET
    def get_empresa(self, pk):
        try:
            empresas = Empresas.objects.get(id_empresa=pk)
            return empresas
        except Empresas.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_empresa(pk)
            serializer = EmpresasSerializer(data)
        else:
            data = Empresas.objects.all()
            serializer = EmpresasSerializer(data, many=True)
        return Response(serializer.data)

    # POST
    def post(self, request):
        data = request.data
        serializer = EmpresasSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Empresa agregada exitosamente.", safe=False)
        return JsonResponse("No se pudo agregar empresa.", safe=False)

    # PUT
    def put(self, request, pk=None):
        empresa_to_update = Empresas.objects.get(id_empresa=pk)
        serializer = EmpresasSerializer(
            instance=empresa_to_update, data=request.data, partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Empresa actualizada con éxito", safe=False)
        return JsonResponse("No se pudo actualizar la empresa.")

    # DELETE
    def delete(self, request, pk):
        empresa_to_delete = Empresas.objects.get(id_empresa=pk)
        empresa_to_delete.delete()
        return JsonResponse("Empresa eliminada exitosamente", safe=False)
