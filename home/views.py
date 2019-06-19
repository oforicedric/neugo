from django.shortcuts import render
from django.urls import path
from django.views.generic.base import TemplateView

class HomeView(TemplateView):
	template_name = "home/home.html"
