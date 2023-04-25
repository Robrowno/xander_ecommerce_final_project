from django.urls import path
from . import views

urlpatterns = [
    path('process_payment/', views.process_payment, name='process_payment'),
]
