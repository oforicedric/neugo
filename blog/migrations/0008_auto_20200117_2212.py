# Generated by Django 2.1 on 2020-01-17 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20200117_2151'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='points_earned',
            field=models.IntegerField(default=20),
        ),
        migrations.AlterField(
            model_name='post',
            name='time_studied',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='post',
            name='user_description',
            field=models.CharField(default='', max_length=40),
        ),
    ]
