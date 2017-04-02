import json

from django.shortcuts import render

from .models import Track
from .serializers import TrackSerializer


def index(request):
    tracks = Track.objects.all()
    context = {
        'tracks': json.dumps(TrackSerializer(tracks, many=True).data)
    }
    return render(request, 'index.html', context)
