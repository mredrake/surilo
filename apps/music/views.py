import json

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
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


def mp3(request, pk):
    track = get_object_or_404(Track, pk=pk)
    if not track.mp3:
        return PermissionDenied()
    from django.utils.encoding import smart_str

    response = HttpResponse(content_type='audio/mpeg')  # mimetype is replaced by content_type for django 1.7
    response['Content-Disposition'] = 'attachment; filename=surilo.mp3'
    response['X-Sendfile'] = smart_str(track.mp3.file)
    # It's usually a good idea to set the 'Content-Length' header too.
    # You can also set any other required headers: Cache-Control, etc.
    return response
