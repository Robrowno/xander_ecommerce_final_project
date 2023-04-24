"""Serializers for delivery app."""

from rest_framework import serializers
from .models import Delivery

class DeliverySerializer(serializers.ModelSerializer):
    """Serializer for Delivery model."""
    
    class Meta:
        model = Delivery
        fields = '__all__'