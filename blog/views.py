from django.shortcuts import render, get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.models import User
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView,
)
from .models import Post
from django.utils import timezone
import time
import pdb


def home(request):
    context = {"posts": Post.objects.all().order_by("-date_posted")}
    return render(request, "blog/home.html", context)

def onboarding(request):
    return render(request, "blog/onboarding.html")


def save_profile(request):
    if request.POST:
        request.session["first_name"] = request.POST["FirstName"]
        request.session["second_name"] = request.POST["LastName"]
        return render(request, "blog/onboarding_universities.html")

    return render(request, "blog/onboarding_universities.html")


def save_uni(request):
    if request.POST:
        request.session["university"] = request.POST["university"]
        return render(request, "blog/onboarding_subject.html")

    return render(request, "blog/onboarding_subject.html")


def save_subject(request):
    if request.POST:
        request.session["subject"] = request.POST["subject"]
        return render(request, "blog/finish_onboarding.html")

    return render(request, "blog/finish_onboarding.ht ml")

def load_user_post_stats():
    posts = Post.objects().all()
    return posts


class PostListView(ListView):
    model = Post
    template_name = "blog/landing.html"  
    context_object_name = "posts"
    ordering = ["-date_posted"]
    paginate_by = 5


class UserPostListView(ListView):
    model = Post
    template_name = "blog/user_posts.html"
    context_object_name = "posts"
    paginate_by = 5

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get("username"))
        return Post.objects.filter(author=user).order_by("-date_posted")


class PostDetailView(DetailView):
    model = Post


class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ["title", "content"]

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)


class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ["title", "content"]

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
    success_url = "/"

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False
