from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
import time
from datetime import datetime
from PIL import Image


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


class Competition(models.Model):
    title = models.CharField(max_length=100)
    message = models.CharField(max_length=200)
    duration = models.DurationField()
    points_required = models.PositiveIntegerField(default=0)
    reward_name = models.CharField(max_length=100)
    reward_description = models.CharField(max_length=200)
    reward_image = models.ImageField(default='default.png', upload_to='rewards')

    def __str__(self):
        return "Competition '%s'" % self.title

    def save(self, *args, **kwargs):
        super().save()

        img = Image.open(self.reward_image.path)


        if img.height > 100 or img.width > 100:
            output_size = (100, 100)
            img.thumbnail(output_size)
            img.save(self.reward_image.path)

    def joined_by_user(self, user):
        participant = CompetitionParticipant.objects.filter(competition=self, user=user)
        if participant.exists():
            return True
        else:
            return False

    def user_won_award(self, user):
        participant = CompetitionParticipant.objects.filter(competition=self, user=user).first()
        if participant:
            return participant.fulfill_competition_conditions()
        else:
            return False


class CompetitionParticipant(models.Model):
    competition = models.ForeignKey(Competition, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    datetime_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s joined competition '%s'" % (self.user, self.competition.title)

    def fulfill_competition_conditions(self):
        competition_finishing_time = self.datetime_joined + self.competition.duration
        points_count = 0
        for post in Post.objects.all().filter(author=self.user):
            if self.datetime_joined < post.date_posted < competition_finishing_time:
                points_count = points_count + post.points_earned

        if points_count >= self.competition.points_required:
            return True
        else:
            return False


class Event(models.Model):
    datetime_created = models.DateTimeField(auto_now_add=True)
    post = models.OneToOneField(Post, on_delete=models.CASCADE, blank=True, null=True)
    participant = models.OneToOneField(CompetitionParticipant, on_delete=models.CASCADE, blank=True, null=True)
