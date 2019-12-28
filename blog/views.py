from django.shortcuts import render, get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.models import User
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView
)
from .models import Post
from django.utils import timezone
import time 
import pdb 

def home(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'blog/home.html', context)

def finish_study(request):

    from utils.make_a_new_blog_post import make_a_post
    
    time_finished = int(round(time.time())) 
    time_studied = time_finished - request.session['start_time']

    make_a_post(start_date=timezone.now(),
                time_studied=time_studied,
                user=request.user)
    
    # 1 second = 1 wallet point
    profile = request.user.profile
    profile.wallet_points = request.user.profile.wallet_points + time_studied
    profile.save() 

    return home(request) 

def map(request):
    return render(request, 'blog/map.html')

def study(request): 
    request.session['start_time'] = int(round(time.time()))
    return render(request, 'blog/studynew.html')

def rewards(request): 
    return render(request, 'blog/rewardsnew.html')

def profile2(request): 
    return render(request, 'blog/profile2.html')

def onboarding(request): 
    return render(request, 'blog/onboarding.html')

def save_profile(request):
    if(request.POST):
        request.session['first_name'] = request.POST['FirstName']
        request.session['second_name'] = request.POST['LastName']
        return render(request, 'blog/onboarding_universities.html')

    return render(request, 'blog/onboarding_universities.html')

def store_time(request): 
    if (request.POST): 
        request.session['study_time'] = request.POST['sessionlength']
        for i in range(100): 
            print(request.session['study_time'])
    return render(request, 'blog/study.html')

def save_uni(request):
    if(request.POST):
        request.session['university'] = request.POST['university']
        return render(request, 'blog/onboarding_subject.html')

    return render(request, 'blog/onboarding_subject.html')

def save_subject(request): 
    if(request.POST):
        request.session['subject'] = request.POST['subject']
        return render(request, 'blog/finish_onboarding.html')

    return render(request, 'blog/finish_onboarding.html')

def make_a_code(request): 
    return render(request, 'blog/make_a_code.html')

def purchase_rewards(request):
    profile = request.user.profile 
    profile.wallet_points = request.user.profile.wallet_points - 10 
    profile.save() 

    return make_a_code(request)

class PostListView(ListView):
    model = Post
    template_name = 'blog/landing.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    ordering = ['-date_posted']
    paginate_by = 5


class UserPostListView(ListView):
    model = Post
    template_name = 'blog/user_posts.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    paginate_by = 5

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Post.objects.filter(author=user).order_by('-date_posted')


class PostDetailView(DetailView):
    model = Post


class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']

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
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False


class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    success_url = '/'

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False