from rest_framework import serializers

from .models import Track, Play


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        exclude = []


class PlaySerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        request = self.context.get('request')
        if request.user.is_authenticated:
            user = request.user
        else:
            user = None
        validated_data['user'] = user
        return Play.objects.create(**validated_data)

    class Meta:
        model = Play
        fields = ['track', ]
