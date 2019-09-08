from django.urls import path
from .views import (
    PostListView,
    PostDetailView,
    PostCreateView,
    PostUpdateView,
    PostDeleteView,
    UserPostListView
)
from . import views

urlpatterns = [
    path('', PostListView.as_view(), name='blog-home'),
    path('study/', views.study, name='blog-study'),
    path('rewards/', views.rewards, name='blog-rewards'),
    path('make_a_code/', views.make_a_code, name='blog-make_a_code'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/new/', PostCreateView.as_view(), name='post-create'),
    path('post/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    path('study/finish/', views.finish_study, name='blog-finish'),
    path('rewards/purchase_rewards/', views.purchase_rewards, name='blog-purchase_rewards'),
    path('rewards/purchase_rewards/go_home', views.home, name='blog-home'), 
]
