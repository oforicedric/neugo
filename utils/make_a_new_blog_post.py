from blog.models import Post
from django.contrib.auth.models import User

def make_a_post(user, start_date, time_studied, user_description):
    
    new_post = Post(
        time_studied=time_studied, 
        author=user,
        user_description=user_description
    )

    new_post.save()
    