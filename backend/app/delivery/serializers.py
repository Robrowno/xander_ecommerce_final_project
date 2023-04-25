"""Serializers for delivery app."""

from rest_framework import serializers
from .models import Shipment, ShipmentLineItem

class DeliverySerializer(serializers.ModelSerializer):
    """Serializer for Delivery model."""
    
    class Meta:
        model = Shipment
        fields = '__all__'