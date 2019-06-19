from django.urls import path
from .views import PostListView
from .models import Post

urlpatterns = [
    path('', PostListView.as_view(template_name="feed/feed.html")),
]

