# Generated by Django 2.1 on 2020-03-20 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0026_auto_20200320_1310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='potential_pics/college_student.jpeg', upload_to='profile_pics'),
        ),
    ]
