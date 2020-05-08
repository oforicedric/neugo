from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
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
    path('rewards/purchase_rewards_100/', views.purchase_rewards_100, name='blog-purchase_rewards-100'),
    path('rewards/purchase_rewards_500/', views.purchase_rewards_500, name='blog-purchase_rewards-500'),
    path('rewards/purchase_rewards_50/', views.purchase_rewards_50, name='blog-purchase_rewards-50'),
    path('rewards/purchase_rewards/go_home/', views.home, name='blog-home'),
    path('ajax/post/<int:pk>/like', views.ajax_like_post, name='ajax_like_post'),
    path('ajax/post/<int:pk>/create/comment/', views.create_comment, name='create_comment'),
    path('tutorial/', views.tutorial, name='tutorial'),
    path('join-competition/<int:pk>/', views.join_competition, name='join_competition')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
