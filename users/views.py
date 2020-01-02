
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterForm, UserUpdateForm, ProfileUpdateForm
from blog.models import Post
import datetime


def register(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            #username = form.cleaned_data.get("username")
            messages.success(
                request, f"Your account has been created! You are now able to log in"
            )
            #request.user.university = request.session["university"]
            return redirect("login")
    else:
        form = UserRegisterForm()
    return render(request, "users/register.html", {"form": form})


@login_required
def profile(request):
    from django.contrib.auth.models import User
    num_of_users = len(User.objects.all())
    all_posts = Post.objects.all()
    user_posts = Post.objects.filter(author=request.user)
    request.session["user_study_activity"] = turn_posts_into_list_for_template(
        user_posts
    )
    total_activity = turn_posts_into_list_for_template(
        all_posts
    )
    average_activity = [x / num_of_users for x in total_activity]
    request.session["all_users_study_activity"] = average_activity
    request.session["daily_goal"] = int(
        (sum(request.session["user_study_activity"]) / 7) * 1.1
    )
    request.session["progress"] = 100 * (
        #request.session["user_study_activity"][-1] / request.session["daily_goal"]
    )
    request.session["time_studied_this_week"] = sum(request.session["user_study_activity"]) 
    request.session["graph_labels"] = generate_graph_labels()
    print(request.session["progress"])
    print(request.session["daily_goal"])
    if request.method == "POST":
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(
            request.POST, request.FILES, instance=request.user.profile
        )
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, f"Your account has been updated!")
            return redirect("profile")

    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)

    context = {"u_form": u_form, "p_form": p_form}

    return render(request, "users/profilefinal.html", context)


def turn_posts_into_list_for_template(posts_object):
    from datetime import timedelta, date

    point_counts = [0] * 7
    for days_back in range(7):
        date_to_query = date.today() - timedelta(days=days_back)
        for _, post in enumerate(posts_object):
            if post.date_posted.date() == date_to_query:
                point_counts[days_back] += post.time_studied
    point_counts.reverse()
    return point_counts


def generate_graph_labels():
    from datetime import date

    labels = []
    day_of_month_today = date.today().day
    for i in range(7):
        labels.append(day_of_month_today - i)
    labels.reverse()
    return labels
