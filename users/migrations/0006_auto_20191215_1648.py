# Generated by Django 2.1 on 2019-12-15 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20191215_1644'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='potential_pics/nerdy_guy.jpg', upload_to='profile_pics'),
        ),
    ]
