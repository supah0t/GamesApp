from rest_framework import viewsets


from games.models import PlayerScore
from .serializers import PlayerScoreSerializer

class PlayerScoreViewSet(viewsets.ModelViewSet):
    serializer_class = PlayerScoreSerializer
    queryset = PlayerScore.objects.all()

#from rest_framework.generics import (
#    ListAPIView,
#    RetrieveAPIView,
#    CreateAPIView,
#    UpdateAPIView,
#    DestroyAPIView
#)

# class PlayerScoreListView(ListAPIView):
#     queryset = PlayerScore.objects.all()
#     serializer_class = PlayerScoreSerializer


# class PlayerScoreDetailView(RetrieveAPIView):
#     queryset = PlayerScore.objects.all()
#     serializer_class = PlayerScoreSerializer


# class PlayerScoreCreateView(CreateAPIView):
#     queryset = PlayerScore.objects.all()
#     serializer_class = PlayerScoreSerializer


# class PlayerScoreUpdateView(UpdateAPIView):
#     queryset = PlayerScore.objects.all()
#     serializer_class = PlayerScoreSerializer


# class PlayerScoreDeleteView(DestroyAPIView):
#     queryset = PlayerScore.objects.all()
#     serializer_class = PlayerScoreSerializer
