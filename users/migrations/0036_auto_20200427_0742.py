# Generated by Django 2.1.5 on 2020-04-27 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0035_auto_20200324_1234'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='potential_pics/college_student.jpeg', upload_to='profile_pics'),
        ),
    ]
