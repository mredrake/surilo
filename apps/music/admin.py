from django.contrib import admin
from .models import Artist, Album, Genre, Label, Track

admin.site.register(Artist)
admin.site.register(Album)
admin.site.register(Genre)
admin.site.register(Label)
admin.site.register(Track)
