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
#to render a http page functions must have request passed in

#.models contains Post and Task models, Task i created later to try and create a class which when a Task object was created 
#would start a timer for the set amount of time.

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

#creates a task in the feed, fields exists in the create_task.html file which populates the page with input 
class TaskCreateView(LoginRequiredMixin, CreateView):
    model = Task
    fields = ['task','level', 'time']
    template_name = 'feed/create_task.html'
	
    def form_valid(self, form):
	    form.instance.user = self.request.user
	    return super().form_valid(form)
#takes us to specific task - further information on a task, inherits from detail view and sets further atributes; model/template_name		
class TaskDetailView(DetailView):
    model = Task
    template_name ='feed/task_detail.html'
	
#Class which shoes posts in a list formast
class PostListView(ListView):
    model = Post
    template_name = 'feed/home.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    ordering = ['-date_created']
 
#View takes us to specific post
class PostDetailView(DetailView):
    model = Post
    template_name ='feed/post_detail.html'

#class for creating new post
class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']
    template_name = 'feed/create.html'

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

#class for updating view
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

#class for deleting view
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
