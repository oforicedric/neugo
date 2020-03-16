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
        return str(self.id)

    def get_absolute_url(self):
        return reverse("post-detail", kwargs={"pk": self.pk})

    def count_post_likes(self):
        return PostLike.objects.filter(post=self)

    def count_comments(self):
        return PostComment.objects.filter(post=self)

    def user_liked_this_post(self, user):
        if PostLike.objects.filter(user=user, post=self).count() > 0:
            return True
        else:
            return False

    def post_comments(self):
        comments_on_post = PostComment.objects.filter(post=self)
        return comments_on_post


class PostLike(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return "%s liked post no. %d" % (self.user, self.post.id)


class PostComment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.CharField(max_length=1000)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s commented a post no. %d" % (self.user, self.post.id)

