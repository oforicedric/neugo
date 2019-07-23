from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
from .models import Profile
#sets the attributes for form classed used in views.py/models.py

class UserRegisterForm(UserCreationForm):
	email = forms.EmailField()
	
	
	class Meta: 
		model = User 
		fields = ['username', 'email','password1','password2', ]
		
		
class UserUpdateForm(forms.ModelForm):
	email = forms.EmailField()
	
	class Meta:
		model = User
		fields = ['username', 'email',]
		
class ProfileUpdateForm(forms.ModelForm):   #different because profile is in different model to user
	class Meta:
		model = Profile
		fields = ['image']
