"""URL mappings for the Product app."""

from django.urls import path
from product import views

# app_name = 'user'

urlpatterns = [
    path('', views.hello_world, name='product_list'),
    # path('<int:pk>/', views.IndividualProduct.as_view(), name='product_list'),
    # path('categories/', views.AllCategories.as_view(), name='product_list'),
    # path('category/<int:pk>/', views.CategoryProducts.as_view(), name='product_list'),
]
