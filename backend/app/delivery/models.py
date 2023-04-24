"""Delivery models."""

from django.db import models

# Create your models here.
class Delivery(models.Model):
    """Delivery model."""
    
    carrier = models.CharField(max_length=255)
    tracking_number = models.CharField(max_length=255)
    shipping_address = models.CharField(max_length=255) # TODO Tie to addresses later.
    shipment_date = models.DateTimeField(auto_now=True)
    shipment_cost = models.DecimalField(max_digits=10, decimal_places=2)
    updated_at = models.DateTimeField(auto_now=True)
    
class DeliveryPriority(models.Model):
    """Delivery priority model."""
    
    delivery = models.ForeignKey(Delivery, on_delete=models.CASCADE, related_name='priority')
    priority = models.CharField(max_length=255)
    updated_at = models.DateTimeField(auto_now=True)
