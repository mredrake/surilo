from django.conf.urls import url
from django.contrib import admin

from apps.music import views as music_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', music_views.index, name='index')
]
