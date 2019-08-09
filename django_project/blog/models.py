from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse

STUDY_TIME_LENGTHS = (
    ('', 'Choose...'),
    ('15 minutes', '15 minutes'),
    ('20 minutes', '20 minutes'),
    ('25 minutes', '25 minutes'),
    ('30 minutes', '30 minutes')
)

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=10, choices=STUDY_TIME_LENGTHS)
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})
