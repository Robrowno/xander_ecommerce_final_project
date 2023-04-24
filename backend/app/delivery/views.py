from rest_framework import generics
from .models import Delivery
from .serializers import DeliverySerializer
from django.shortcuts import render

# Create your views here.
class DeliveryList(generics.ListCreateAPIView):
    queryset = Delivery.objects.all()
    serializer_class = DeliverySerializer
