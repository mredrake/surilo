from rest_framework import viewsets

from .models import Track
from .serializers import TrackSerializer


class TrackViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
