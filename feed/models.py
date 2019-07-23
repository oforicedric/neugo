from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

#stores attributes to create a post
class Post(models.Model):
	title = models.CharField(max_length=200)
	content = models.TextField()
	length = models.IntegerField()
	date_created = models.DateField()
	author = models.ForeignKey(User, on_delete=models.CASCADE)
	
	def __str__(self):
		return self.title
		
	def get_absolute_url(self):
		return reverse('post-detail', kwargs={'pk': self.pk})
		

class Task(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	task = models.CharField(max_length=100)
	level = models.IntegerField()
	time = models.IntegerField()
	
	def __str__(self):
		return self.task
		
	def get_absolute_url(self):
		return reverse('task-detail', kwargs={'pk': self.pk})
		
		
	
	
	
