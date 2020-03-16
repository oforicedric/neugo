from django import forms
from .models import PostComment


class CommentForm(forms.ModelForm):
    class Meta:
        model = PostComment
        fields = "__all__"


