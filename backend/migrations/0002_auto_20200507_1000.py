# Generated by Django 2.2.12 on 2020-05-07 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pipeline',
            fields=[
                ('id', models.CharField(max_length=32,
                                        primary_key=True, serialize=False)),
                ('project_id', models.CharField(max_length=32)),
                ('status', models.CharField(max_length=32)),
                ('branch_ref', models.CharField(max_length=128)),
                ('commit_id', models.CharField(max_length=32)),
                ('commit_author', models.CharField(max_length=32)),
                ('commit_message', models.CharField(max_length=128)),
                ('created_at', models.DateTimeField()),
                ('updated_at', models.DateTimeField()),
                ('finished_at', models.DateTimeField()),
            ],
        ),
        migrations.RemoveField(
            model_name='project',
            name='projectId',
        ),
        migrations.AddField(
            model_name='project',
            name='name',
            field=models.CharField(default='', max_length=128),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='project',
            name='id',
            field=models.CharField(
                max_length=32, primary_key=True, serialize=False),
        ),
    ]