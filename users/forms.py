from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from users.models import UNIVERSITIES, SUBJECTS
from .models import Profile
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
import pdb


class OnboardingNameForm(forms.Form):
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)


class OnboardingUniversityForm(forms.Form):
    university = forms.ChoiceField(choices=UNIVERSITIES)


class OnboardingSubjectForm(forms.Form):
    subject = forms.ChoiceField(choices=SUBJECTS)


class UserRegisterForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super(UserRegisterForm, self).__init__(*args, **kwargs)
        email = forms.EmailField()
        self.fields['email'].required = True
        self.helper = FormHelper()
        self.helper.add_input(Submit('submit', 'Next', css_class='button btn-success'))

    def clean_username(self):
        data = self.cleaned_data['username']
        if User.objects.filter(username=data).exists():
            raise forms.ValidationError("This username is already taken")
        return data

    def clean_email(self):
        data = self.cleaned_data['email']
        if User.objects.filter(email=data).exists():
            raise forms.ValidationError("This email is already used")
        return data

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "password1",
            "password2"
        ]


class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ["username", "email"]


class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ["image"]
