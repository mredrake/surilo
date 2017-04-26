import json

from django.http import HttpResponse, FileResponse
from django.shortcuts import render, get_object_or_404
from django.views.decorators.http import require_http_methods
from rest_framework.exceptions import PermissionDenied

from .models import Track
from .serializers import TrackSerializer


def index(request):
    tracks = Track.objects.all()
    tracks_data = TrackSerializer(tracks, many=True).data
    state = {
        'tracks': tracks_data,
        'playlist': [],
        'now_playing': None,
    }
    state = json.dumps(state)
    context = {
        'state': state
    }
    return render(request, 'index.html', context)


@require_http_methods(['POST', ])
def mp3(request, pk):
    track = get_object_or_404(Track, pk=pk)
    if not track.mp3:
        return PermissionDenied()
    response = FileResponse(open(track.mp3.file.name, 'rb'), content_type='application/octet-stream')
    return response
