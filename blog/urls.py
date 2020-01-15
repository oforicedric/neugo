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
    path('map/', views.map, name='blog-map'),
    path('onboarding/', views.onboarding, name='onboarding'),
    path('rewards/', views.rewards, name='blog-rewards'),
    path('make_a_code/', views.make_a_code, name='blog-make_a_code'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/new/', PostCreateView.as_view(), name='post-create'),
    path('post/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    path('study/store_time/finish/', views.finish_study, name='blog-finish'),
    path('onboarding/saveprofile/', views.save_profile, name='blog-saveprofile'),
    path('onboarding/saveprofile/saveuni/', views.save_uni, name='blog-saveuni'),
    path('onboarding/saveprofile/saveuni/savesubject/', views.save_subject, name='blog-savesubject'), 
    path('study/store_time/', views.store_time, name='blog-storetime'), 
    path('rewards/purchase_rewards/', views.purchase_rewards, name='blog-purchase_rewards'),
    path('rewards/purchase_rewards/go_home/', views.home, name='blog-home'), 
    path('tutorial/', views.tutorial, name='tutorial'), 

]