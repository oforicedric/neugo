from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterForm, UserUpdateForm, ProfileUpdateForm, UserCreationForm	
from django.views.generic.base import TemplateView
from .models import Profile

#registers a user if the input is in a valid format

def register(request):
	if request.method == 'POST':
		form = UserRegisterForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data.get('username')
			return redirect('home')
	else: 
		form = UserRegisterForm()
	return render(request,'users/register.html', {'form': form})

#if logged in user can update profile

@login_required
def profile(request):
	try:
		newprofile = request.user.profile
	except Profile.DoesNotExist:
		newprofile = Profile.objects.get_or_create(user=request.user)
		# newprofile = Profile(user=request.user)
	if request.method == 'POST':
		u_form = UserUpdateForm(request.POST, instance=request.user)
		p_form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
		if u_form.is_valid() and p_form.is_valid():
			u_form.save()
			p_form.save()
			messages.success(request, f'Your account has been updated!')
			return redirect('profile') #chage to profile
	else:	
		u_form = UserUpdateForm(instance=request.user)
		p_form = ProfileUpdateForm(instance=request.user.profile)
	context = {
		'u_form': u_form,
		'p_form': p_form
	}
	return render(request, 'users/profile.html', context)