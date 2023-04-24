"""URL mappings for the Product app."""

from django.urls import path
from product import views

# app_name = 'user'

urlpatterns = [
    path('', views.ProductList.as_view(), name='product_list'),
]
