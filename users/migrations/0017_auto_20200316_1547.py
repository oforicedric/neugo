# Generated by Django 2.1 on 2020-03-16 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0016_auto_20200315_1434'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='potential_pics/college_student.jpeg', upload_to='profile_pics'),
        ),
    ]
