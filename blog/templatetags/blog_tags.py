from django import template

register = template.Library()


@register.filter
def liked_by_user(post, user):
    return post.user_liked_this_post(user)

