from django.contrib.auth.models import User
from django.db import models

from surilo.helpers.third_party import youtube_url_to_id


class Label(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Genre(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Artist(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Album(models.Model):
    title = models.CharField(max_length=250)
    artist = models.ForeignKey(Artist)
    cover_image = models.ImageField(blank=True, null=True)
    year = models.PositiveIntegerField(blank=True, null=True)
    released_date = models.DateField(blank=True, null=True)
    label = models.ForeignKey(Label)
    genre = models.ForeignKey(Genre, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class Track(models.Model):
    title = models.CharField(max_length=255)
    artist = models.ForeignKey(Artist)
    year = models.PositiveIntegerField(blank=True, null=True)
    comment = models.CharField(max_length=30, blank=True, null=True)
    track = models.PositiveSmallIntegerField(blank=True, null=True)
    genre = models.ForeignKey(Genre, blank=True, null=True)
    cover_image = models.ImageField(blank=True, null=True)
    copyright = models.CharField(max_length=200, blank=True, null=True)
    album = models.ForeignKey(Album, blank=True, null=True, related_name='tracks')
    length = models.PositiveIntegerField(blank=True, null=True)
    released_date = models.DateField(blank=True, null=True)
    label = models.ForeignKey(Label, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    mp3 = models.FileField(upload_to='tracks', blank=True, null=True)
    yt = models.CharField(max_length=255, blank=True, null=True, verbose_name='YouTube ID or URL')

    @property
    def has_mp3(self):
        return True if self.mp3 else False

    def save(self, *args, **kwargs):
        if self.yt.lower().startswith(('http', 'www.youtube', 'youtu.be', 'youtube.com')):
            self.yt = youtube_url_to_id(self.yt)
        super(Track, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class Play(models.Model):
    track = models.ForeignKey(Track, related_name='plays')
    datetime = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, null=True, blank=True)

    def __str__(self):
        return str(self.track) + ' - ' + str(self.user)
