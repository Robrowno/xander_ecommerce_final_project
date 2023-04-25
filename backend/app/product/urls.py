"""URL mappings for the Product app."""

from django.urls import path
from product import views

urlpatterns = [
    path('', views.AllProducts.as_view(), name='product_list'),
    path('<int:pk>/', views.IndividualProduct.as_view(), name='product_detail'),
    # path('categories/', views.Categories.as_view(), name='product_list'),
]
