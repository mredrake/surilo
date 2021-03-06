# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-30 14:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('cover_image', models.ImageField(blank=True, null=True, upload_to='')),
                ('year', models.PositiveIntegerField(blank=True, null=True)),
                ('released_date', models.DateField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Label',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Track',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('header', models.CharField(max_length=30)),
                ('title', models.CharField(max_length=30)),
                ('year', models.PositiveIntegerField(blank=True, null=True)),
                ('comment', models.CharField(blank=True, max_length=30, null=True)),
                ('track', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('cover_image', models.ImageField(blank=True, null=True, upload_to='')),
                ('copyright', models.CharField(blank=True, max_length=200, null=True)),
                ('length', models.PositiveIntegerField(blank=True, null=True)),
                ('released_date', models.DateField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('mp3', models.FileField(blank=True, null=True, upload_to='tracks')),
                ('yt', models.CharField(blank=True, max_length=255, null=True, verbose_name='YouTube ID or URL')),
                ('album', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tracks', to='music.Album')),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='music.Artist')),
                ('genre', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='music.Genre')),
                ('label', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='music.Label')),
            ],
        ),
        migrations.AddField(
            model_name='album',
            name='artist',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='music.Artist'),
        ),
        migrations.AddField(
            model_name='album',
            name='genre',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='music.Genre'),
        ),
        migrations.AddField(
            model_name='album',
            name='label',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='music.Label'),
        ),
    ]
