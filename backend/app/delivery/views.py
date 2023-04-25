from rest_framework import generics
from .models import Shipment, ShipmentLineItem
from .serializers import DeliverySerializer
from django.shortcuts import render

# Create your views here.
class DeliveryList(generics.ListCreateAPIView):
    queryset = Shipment.objects.all()
    serializer_class = DeliverySerializer
