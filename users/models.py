import random
from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from blog.models import Post


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pictures = [
        "asian_student.jpeg",
        "black_and_white_photo.jpg",
        "college_student.jpeg",
        "girl_looking_sideways.jpg",
        "nerdy_guy.jpg",
        "science_student.jpeg",
        "student_sitting_on_grass.jpg",
    ]
    
    for i in range(len(profile_pictures)):
        profile_pictures[i] = "potential_pics/" + profile_pictures[i]

    image = models.ImageField(
        default=random.choice(profile_pictures), upload_to="profile_pics"
    )
    
    wallet_points = models.BigIntegerField(default=0)
    university = models.CharField(default="", max_length=35)
    subject = models.CharField(default="", max_length=35)

    def __str__(self):
        return f"{self.user.username} Profile"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)

