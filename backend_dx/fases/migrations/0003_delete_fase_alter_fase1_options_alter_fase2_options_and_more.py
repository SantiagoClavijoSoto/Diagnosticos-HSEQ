# Generated by Django 5.0 on 2024-01-04 15:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fases', '0002_fase_alter_fase1_options_alter_fase2_options_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Fase',
        ),
        migrations.AlterModelOptions(
            name='fase1',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='fase2',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='fase3',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='fase4',
            options={'managed': False},
        ),
    ]
