"""URL mappings for the Delivery app."""

from django.urls import path
from delivery import views

urlpatterns = [
    path('', views.DeliveryList.as_view(), name='delivery_list'),
]
