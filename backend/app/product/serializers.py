"""Serializers for product app."""

from rest_framework import serializers
from .models import Product, Tag


class TagSerializer(serializers.ModelSerializer):
    """Serializer for Product model."""
    
    class Meta:
        model = Tag
        fields = '__all__'
        
        
class ProductSerializer(serializers.ModelSerializer):
    """Serializer for Product model."""
    tags = TagSerializer(many=True)
    
    class Meta:
        model = Product
        fields = '__all__'
        

        