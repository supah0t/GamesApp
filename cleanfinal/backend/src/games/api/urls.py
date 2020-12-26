from games.api.views import PlayerScoreViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', PlayerScoreViewSet, basename='playerScore')
urlpatterns = router.urls


# from django.urls import path

# from .views import (
#     PlayerScoreListView,
#     PlayerScoreDetailView,
#     PlayerScoreCreateView,
#     PlayerScoreUpdateView,
#     PlayerScoreDeleteView
# )

# urlpatterns = [
#     path('', PlayerScoreListView.as_view()),
#     path('create/', PlayerScoreCreateView.as_view()),
#     path('<pk>', PlayerScoreDetailView.as_view()),
#     path('<pk>/update/', PlayerScoreUpdateView.as_view()),
#     path('<pk>/delete/', PlayerScoreDeleteView.as_view()),
# ]
