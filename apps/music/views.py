import json

from django.shortcuts import render

from .models import Track
from .serializers import TrackSerializer


def index(request):
    tracks = Track.objects.all()
    tracks_data = TrackSerializer(tracks, many=True).data
    state = {
        'tracks': tracks_data
    }
    state = json.dumps(state)
    context = {
        'state': state
    }
    return render(request, 'index.html', context)
