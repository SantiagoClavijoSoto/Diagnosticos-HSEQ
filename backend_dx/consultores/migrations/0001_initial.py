# Generated by Django 4.1.13 on 2024-03-09 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Consultor',
            fields=[
                ('id_consultor', models.AutoField(primary_key=True, serialize=False)),
                ('nombres', models.CharField(max_length=200)),
                ('apellidos', models.CharField(max_length=200)),
                ('numero_cedula', models.CharField(max_length=200)),
                ('contrasena', models.CharField(max_length=128)),
                ('correo_electronico', models.CharField(max_length=200)),
                ('ultimo_ingreso', models.CharField(max_length=200)),
                ('cargo', models.CharField(max_length=200)),
                ('licencia_SST', models.CharField(max_length=200)),
            ],
            options={
                'db_table': 'consultores',
                'managed': False,
            },
        ),
    ]
