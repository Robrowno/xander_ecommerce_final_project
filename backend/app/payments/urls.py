from django.urls import path
from . import views

urlpatterns = [
    path('process_payment/', views.process_payment, name='process_payment'),
    path('success_page/', views.success_page, name='success_page'),
    path('create_payment_intent/', views.create_payment_intent, name='create_payment_intent'),
]
