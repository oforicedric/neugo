from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from django.conf import settings
from home.views import HomeView
from django.conf.urls.static import static
from users import views as user_views
from feed import views as feed_views
from feed.models import Task


urlpatterns = [
	path('admin/', admin.site.urls),
	path('home/', feed_views.home, name='home'),
    # path('', feed_views.PostListView.as_view(), name='feed'),
	path('post/<int:pk>/', feed_views.PostDetailView.as_view(), name='post-detail'), #detailview expects the pk
    path('post/new/', feed_views.PostCreateView.as_view(),name='post-create'),
	path('task/new/', feed_views.TaskCreateView.as_view(),name='task-create'),
	path('task/<int:pk>', feed_views.TaskDetailView.as_view(), name='task-detail'),
	path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
	path('register/', user_views.register, name='register'),
	path('choice/', feed_views.ChoiceView, name='choice'),
	path('profile/', user_views.profile, name='profile'),
	path('neugo/', feed_views.task, name='neugo'),
	path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
]


