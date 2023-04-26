"""Serializers for delivery app."""

from rest_framework import serializers
from .models import Shipment, ShipmentLineItem

class DeliverySerializer(serializers.ModelSerializer):
    """Serializer for Delivery model."""
    
    class Meta:
        model = Shipment
        fields = '__all__'
        
class DeliveryLineItemSerializer(serializers.ModelSerializer):
    """Serializer for Delivery Line Item model."""
    
    class Meta:
        model = ShipmentLineItem
        fields = '__all__'