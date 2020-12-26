from rest_framework import serializers
from games.models import PlayerScore

class PlayerScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerScore
        fields = ('id', 'score' )