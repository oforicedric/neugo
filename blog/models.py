from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
import time
from datetime import datetime


class Post(models.Model):
    objects = models.Manager()
    title = "title"
    time_studied = models.IntegerField(default=0)
    points_earned = models.IntegerField(default=20)
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    user_description = models.CharField(
        default="", max_length=40
    )

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post-detail", kwargs={"pk": self.pk})

