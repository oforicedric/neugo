from django.contrib import admin
from .models import Post, PostLike, PostComment, Competition, CompetitionParticipant, Event

admin.site.register(Post)
admin.site.register(PostLike)
admin.site.register(PostComment)
admin.site.register(Competition)
admin.site.register(CompetitionParticipant)
admin.site.register(Event)
