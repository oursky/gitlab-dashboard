# Generated by Django 2.2.12 on 2020-05-19 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_runner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pipeline',
            name='created_at',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='pipeline',
            name='finished_at',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='pipeline',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
    ]
