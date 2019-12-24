from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
import time

STUDY_TIME_LENGTHS = (
    ('', 'Choose...'),
    ('15 minutes', '15 minutes'),
    ('20 minutes', '20 minutes'),
    ('25 minutes', '25 minutes'),
    ('30 minutes', '30 minutes')
)

STUDY_TIME_INTEGERS = (
    (0, 'Choose...'),
    (15, '15 minutes'),
    (20, '20 minutes'),
    (25, '25 minutes'),
    (30, '30 minutes')
)

class Post(models.Model):
    objects = models.Manager()
    title = "title" #models.CharField(max_length=100)
    time_studied = models.IntegerField(default=20)
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})             