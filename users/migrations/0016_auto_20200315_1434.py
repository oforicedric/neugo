# Generated by Django 2.1 on 2020-03-15 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0015_auto_20200104_0014'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='potential_pics/nerdy_guy.jpg', upload_to='profile_pics'),
        ),
    ]
