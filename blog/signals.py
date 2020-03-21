from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Post, CompetitionParticipant, Event


@receiver(post_save, sender=Post)
def create_post_event(sender, instance, created, **kwargs):
    if created:
        Event.objects.create(post=instance)


@receiver(post_save, sender=Post)
def save_post_event(sender, instance, **kwargs):
    if hasattr(instance, 'event') and instance.event is not None:
        instance.event.save()
    else:
        Event.objects.create(post=instance)


@receiver(post_save, sender=CompetitionParticipant)
def create_participant_event(sender, instance, created, **kwargs):
    if created:
        Event.objects.create(participant=instance)


@receiver(post_save, sender=CompetitionParticipant)
def save_participant_event(sender, instance, **kwargs):
    if hasattr(instance, 'event') and instance.event is not None:
        instance.event.save()
    else:
        Event.objects.create(participant=instance)


