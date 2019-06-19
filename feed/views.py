from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView
)
from .models import Post,Task

def ChoiceView(request):
	return render(request,'feed/choice.html')

def home(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'feed/home.html', context)

def task(request):
    context = {
        'tasks': Task.objects.all()
    }
    return render(request, 'feed/neugo.html', context)

class TaskView(ListView):
	model = Task
	template_name = 'feed/neugo.html'

class TaskCreateView(LoginRequiredMixin, CreateView):
    model = Task
    fields = ['task','level', 'time']
    template_name = 'feed/create_task.html'
	
    def form_valid(self, form):
	    form.instance.user = self.request.user
	    return super().form_valid(form)
		
class TaskDetailView(DetailView):
    model = Task
    template_name ='feed/task_detail.html'

class PostListView(ListView):
    model = Post
    template_name = 'feed/home.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    ordering = ['-date_created']
 
#View takes us to specific post
class PostDetailView(DetailView):
    model = Post
    template_name ='feed/post_detail.html'


class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']
    template_name = 'feed/create.html'

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)


class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

    def test_func(self):
        Post = self.get_object()
        if self.request.user == Post.author:
            return True
        return False


class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    success_url = '/'

    def test_func(self):
        Post = self.get_object()
        if self.request.user == Post.author:
            return True
        return False


def about(request):
    return render(request, 'feed/about.html', {'title': 'About'})