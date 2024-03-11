from django.http import JsonResponse
from .models import Paso
from bson.json_util import dumps
from bson.objectid import ObjectId
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseBadRequest, HttpResponseNotFound
import json

@csrf_exempt
def obtener_paso_por_numero(request, paso):
    try:
        documento = Paso.objects.get(pk=paso)
        data = {
            'paso': documento.paso,
            'descripcion': documento.descripcion
        }
        return JsonResponse(data)
    except Paso.DoesNotExist:
        return JsonResponse({'error': 'El documento no existe'}, status=404)

@csrf_exempt
def pasos(request, paso):
    if request.method == "GET":
        try:
            documento = Paso.objects.get(pk=paso)
            data = {"paso": documento.paso, "descripcion": documento.descripcion}
            return JsonResponse(data)
        except Paso.DoesNotExist:
            return JsonResponse({"error": "El documento no existe"}, status=404)

    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            nuevo_documento = Paso.objects.create(
                paso=data["paso"], descripcion=data["descripcion"]
            )
            return JsonResponse({"paso": nuevo_documento.pk}, status=201)
        except KeyError:
            return JsonResponse({"error": "Datos incompletos"}, status=400)

    elif request.method == "PUT":
        try:
            data = json.loads(request.body)
            documento = Paso.objects.get(pk=paso)
            documento.paso = data.get("paso", documento.paso)
            documento.descripcion = data.get("descripcion", documento.descripcion)
            documento.save()
            return JsonResponse({"mensaje": "Documento actualizado correctamente"})
        except Paso.DoesNotExist:
            return JsonResponse({"error": "El documento no existe"}, status=404)
        except KeyError:
            return JsonResponse({"error": "Datos incompletos"}, status=400)

    elif request.method == "DELETE":
        try:
            documento = Paso.objects.get(pk=paso)
            documento.delete()
            return JsonResponse({"mensaje": "Documento eliminado correctamente"})
        except Paso.DoesNotExist:
            return JsonResponse({"error": "El documento no existe"}, status=404)
