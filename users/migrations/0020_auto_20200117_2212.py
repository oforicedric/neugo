# Generated by Django 2.1 on 2020-01-17 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0019_auto_20200117_2151'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='potential_pics/black_and_white_photo.jpg', upload_to='profile_pics'),
        ),
    ]
