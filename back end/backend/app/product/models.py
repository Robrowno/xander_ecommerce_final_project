"""Product models."""

from django.db import models

# Create your models here.

class Product(models.Model):
    """Product model."""
    
    sku = models.CharField(max_length=50)
    name = models.CharField(max_length=255)
    tags = models.ManyToManyField('Tag')
    description = models.TextField()
    has_sizes = models.BooleanField(default=False, null=True, blank=True)
    inventory_count = models.IntegerField(default=0)
    retail_price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/', null=True)
    image_url = models.CharField(max_length=255, null=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, null=True)
    
class Tag(models.Model):
    """Tags model."""
    
    name = models.CharField(max_length=255)
    friendly_name = models.CharField(max_length=255, null=True, blank=True)
    