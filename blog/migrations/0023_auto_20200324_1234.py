# Generated by Django 2.1.5 on 2020-03-24 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0022_auto_20200320_1629'),
    ]

    operations = [
        migrations.AlterField(
            model_name='competition',
            name='reward_image',
            field=models.ImageField(default='default.png', upload_to='rewards'),
        ),
    ]
