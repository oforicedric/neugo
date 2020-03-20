from django import template

register = template.Library()


@register.filter
def liked_by_user(post, user):
    return post.user_liked_this_post(user)


@register.filter
def user_joined_competition(competition, user):
    return competition.joined_by_user(user)

@register.filter
def user_finished_competition(competition, user):
    return competition.user_won_award(user)


