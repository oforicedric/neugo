# Generated by Django 2.1 on 2020-03-16 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_postcomment_date_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postcomment',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
