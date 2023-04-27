"""Delivery models."""

from django.db import models
from product.models import Product
from accounts.models import User

# Create your models here.
class Shipment(models.Model):
    """Shipment model."""
    
    shipment_number = models.CharField(max_length=255)
    user_profile = models.ForeignKey(User, on_delete=models.CASCADE, related_name='shipments')
    customer_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    street_address1 = models.CharField(max_length=255)
    street_address2 = models.CharField(max_length=255)
    town_or_city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    postcode = models.CharField(max_length=255)
    delivery_cost = models.DecimalField(max_digits=10, decimal_places=2)
    order_total = models.DecimalField(max_digits=10, decimal_places=2)
    grand_total = models.DecimalField(max_digits=10, decimal_places=2)
    order_date = models.DateTimeField(auto_now=True)
    
class ShipmentLineItem(models.Model):
    """Shipment line item model."""
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='shipment_line_items')
    product_size = models.CharField(max_length=255)
    shipment = models.ForeignKey(Shipment, on_delete=models.CASCADE, related_name='shipment_line_items')
    quantity = models.IntegerField()
    retail_price = models.DecimalField(max_digits=10, decimal_places=2)
