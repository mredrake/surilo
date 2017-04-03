from rest_framework import viewsets, mixins

from .models import Track, Play
from .serializers import TrackSerializer, PlaySerializer


class TrackViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer


class PlayViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Play.objects.all()
    serializer_class = PlaySerializer
