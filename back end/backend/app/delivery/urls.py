"""URL mappings for the Delivery app."""

from django.urls import path
from delivery import views

urlpatterns = [
    path('', views.hello_world, name='shipment_list'),
    # path('<int:pk>/', views.IndividualShipment.as_view(), name='shipment_list'),
    # path('lineitems/', views.AllShipmentLineItems.as_view(), name='shipment_line_item_list'),
    # path('lineitem/<int:pk>/', views.IndividualShipmentLineItem.as_view(), name='shipment_line_item_list'),
]
