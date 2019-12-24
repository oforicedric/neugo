from blog.models import Post
from django.contrib.auth.models import User

def make_a_post(user, start_date, time_studied):
    
    new_post = Post(
        #title=str(user.id) + "_" + str(start_date), 
        time_studied=time_studied, 
        author=user
    )

    new_post.save()
    