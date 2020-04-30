from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from .forms import *
from blog.models import Post, Competition
from formtools.wizard.views import SessionWizardView


def register(request):
    logout(request)
    return redirect('register_onboarding')


class RegistrationWizard(SessionWizardView):
    template_name = "users/register.html"
    form_list = [OnboardingNameForm, OnboardingUniversityForm,
                 OnboardingSubjectForm, UserRegisterForm]

    # def get_context_data(self, form, **kwargs):
        # context = super().get_context_data(form=form, **kwargs)
        # container_text = ""
        # if self.request.user.is_authenticated:
        #     return redirect('/rewards/purchase_rewards/go_home/')
        # if self.steps.current == '0':
        #     container_text = "Tell us your name.."
        # elif self.steps.current == '1':
        #     container_text = "Nice! which University do you you go to?"
        # elif self.steps.current == '2':
        #     container_text = "Amazing! What subject are you studying then?"
        # elif self.steps.current == '3':
        #     container_text = "Okay, we just need a username, email and password to get started..."

        # context.update({'container_text': container_text})

        # print(context, 'context')

        # return context

    def done(self, form_list, **kwargs):
        form_list = list(form_list)
        # create user
        new_user = form_list[3].save()
        # fill in profile
        new_user.profile.first_name = form_list[0].cleaned_data['first_name']
        new_user.profile.last_name = form_list[0].cleaned_data['last_name']
        new_user.profile.university = form_list[1].cleaned_data['university']
        new_user.profile.subject = form_list[2].cleaned_data['subject']
        new_user.profile.save()

        # redirect
        return redirect("blog-home")


def set_goals(request):
    request.session["weekly_goal"] = compute_weekly_goal()
    request.session["monthly_goal"] = compute_monthly_goal()
    request.session["daily_goal"] = compute_daily_goal()


def compute_daily_goal():
    return 1000


def compute_weekly_goal():
    return 3000


def compute_monthly_goal():
    return int(7000 * 4.3)


def compute_progress(request):
    request.session["daily_progress"] = 100 * (
        0.01
        + (request.session["user_study_activity"]
           [-1] / request.session["daily_goal"])
    )
    request.session["weekly_progress"] = 100 * (
        0.01
        + (sum(request.session["user_study_activity"]) /
           request.session["weekly_goal"])
    )
    request.session["monthly_progress"] = 100 * (
        0.01
        + (
            sum(request.session["user_study_activity"])
            / request.session["monthly_goal"]
        )
    )

@login_required
def profile(request):
    from django.contrib.auth.models import User

    num_of_users = len(User.objects.all())
    all_posts = Post.objects.all()
    user_posts = Post.objects.filter(author=request.user)
    request.session["user_study_activity"] = turn_posts_into_list_for_template(
        user_posts
    )
    total_activity = turn_posts_into_list_for_template(all_posts)
    average_activity = [x / num_of_users for x in total_activity]
    set_goals(request)
    compute_progress(request)
    request.session["time_studied_this_week"] = sum(
        request.session["user_study_activity"]
    )
    request.session["graph_labels"] = generate_graph_labels()
    if request.method == "POST":
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
        if u_form.is_valid() and p_form.is_valid():
            print('I got here')
            u_form.save()
            p_form.save()
            messages.success(request, f"Your account has been updated!")
            return redirect("profile")

    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)

    competitions = Competition.objects.all()
    context = {
        "u_form": u_form,
        "p_form": p_form,
        "competitions": competitions
    }

    for competition in competitions:
        for participant in competition.competitionparticipant_set.all():
            result = participant.fulfill_competition_conditions()

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
