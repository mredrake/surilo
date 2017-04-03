from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter

from apps.music import views as music_views
from apps.music import api as music_api

from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()

router.register(r'tracks', music_api.TrackViewSet, 'tracks')
router.register(r'plays', music_api.PlayViewSet, 'plays')

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', music_views.index, name='index'),
    url(r'^api/v1/', include(router.urls, namespace='api')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
